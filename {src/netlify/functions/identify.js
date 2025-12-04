// Netlify serverless function to handle Claude API calls
// Your API key is stored securely in Netlify environment variables

export default async (request, context) => {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { image, location } = await request.json();

    if (!image) {
      return new Response(JSON.stringify({ error: 'No image provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Netlify.env.get('ANTHROPIC_API_KEY');
    
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract base64 data and media type from data URL
    const matches = image.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return new Response(JSON.stringify({ error: 'Invalid image format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const mediaType = matches[1];
    const imageData = matches[2];

    const locationContext = location 
      ? `The user is located in ${location.region || 'North America'}${location.state ? `, ${location.state}` : ''}.`
      : 'The user is located somewhere in North America.';

    const prompt = `You are an expert wildlife tracker and animal track identifier. Analyze this image of an animal track and identify what animal made it.

${locationContext}

Please respond with a JSON object containing:
1. "animal": The common name of the animal (lowercase, e.g., "white-tailed deer", "coyote", "raccoon")
2. "confidence": A number from 0-100 representing your confidence in this identification
3. "reasoning": A brief explanation of why you identified this track (key features you noticed)
4. "alternates": An array of 1-2 other possible animals this could be, each with name and confidence

Consider these factors:
- Track shape and size
- Number of toes visible
- Presence or absence of claw marks
- Overall pattern and gait if multiple tracks visible
- The geographic location provided

If the image is not a clear animal track or you cannot identify it, set confidence below 30 and explain why.

Respond ONLY with valid JSON, no other text.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: mediaType,
                  data: imageData,
                },
              },
              {
                type: 'text',
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Claude API error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to analyze image' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await response.json();
    const textContent = result.content.find(c => c.type === 'text');
    
    if (!textContent) {
      return new Response(JSON.stringify({ error: 'No response from AI' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Parse the JSON response from Claude
    let identification;
    try {
      // Clean up response in case there's markdown formatting
      let jsonText = textContent.text.trim();
      if (jsonText.startsWith('```json')) {
        jsonText = jsonText.slice(7);
      }
      if (jsonText.startsWith('```')) {
        jsonText = jsonText.slice(3);
      }
      if (jsonText.endsWith('```')) {
        jsonText = jsonText.slice(0, -3);
      }
      identification = JSON.parse(jsonText.trim());
    } catch (e) {
      console.error('Failed to parse Claude response:', textContent.text);
      return new Response(JSON.stringify({ 
        error: 'Failed to parse AI response',
        raw: textContent.text 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(identification), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ error: 'Server error', message: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config = {
  path: '/api/identify',
};
