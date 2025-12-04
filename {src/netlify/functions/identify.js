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

    const prompt = `You are a master wildlife tracker with decades of field experience identifying animal tracks across North America. You have studied under expert trackers and have extensive knowledge of track morphology, gait patterns, and regional wildlife.

LOCATION CONTEXT:
${locationContext}

SYSTEMATIC TRACK ANALYSIS - Follow this protocol:

**STEP 1: BASIC MORPHOLOGY**
- Overall track shape: Round? Oval? Heart-shaped? Asymmetrical?
- Estimated size: Measure mentally against common objects if possible
- Track symmetry: Symmetrical (cats, dogs) or asymmetrical (mustelids)?

**STEP 2: TOE ANALYSIS**
- Count visible toes: 2 toes (ungulates), 4 toes (canines/felines), 5 toes (bears/mustelids/raccoons)
- Toe arrangement: Are toes in a line, arc, or circular pattern?
- Toe shape: Round, oval, or teardrop-shaped?
- Note: Cats and dogs show 4 toes; the 5th toe (dewclaw) is higher and rarely registers

**STEP 3: CLAW MARKS**
- Present or absent? This is CRITICAL:
  - Cats (bobcat, mountain lion, house cat) = NO claw marks (retractable)
  - Dogs (coyote, wolf, fox, domestic dog) = Claw marks visible
  - Bears = Long claw marks extending beyond toes
- Claw shape: Pointed, blunt, or curved?

**STEP 4: PAD ANALYSIS**
- Heel/palm pad shape:
  - Canines: Triangular or chevron-shaped
  - Felines: Three-lobed (M-shaped) rear edge
  - Bears: Wide, flat pad
  - Raccoon: Looks like small human hand
- Size ratio of heel pad to toes

**STEP 5: GAIT PATTERN (if multiple tracks visible)**
- Direct register (rear foot in front track) = cats, foxes
- Diagonal walk, trot, bound, or gallop?
- Straddle (trail width) and stride length

**STEP 6: CONTEXTUAL CLUES**
- Substrate: mud, snow, sand, dust affects track clarity
- Habitat visible: forest floor, streambank, trail
- Associated sign: scat, feeding sign, drag marks

**KEY DISTINGUISHING FEATURES:**

DEER FAMILY (2 toes, heart-shaped):
- White-tailed deer: 2-3" long, pointed tips, dewclaws in deep substrate
- Mule deer: Slightly larger 2.5-3.5", similar to whitetail
- Elk: 3.5-4.5", more rounded than deer
- Moose: 5-7", very large, splayed in soft ground

CANINES (4 toes, oval, claws visible, triangular pad):
- Coyote: 2-2.5", neat oval, straight line trail
- Wolf: 4-5", much larger, X pattern between toes and pad
- Red fox: 1.75-2.5", very neat, fur may blur edges
- Domestic dog: Variable 1.5-4", messy trail pattern, splayed toes

FELINES (4 toes, round, NO claws, 3-lobed pad):
- Bobcat: 1.5-2.5", asymmetrical with one leading toe
- Mountain lion: 3-4", large round, obvious 3-lobed heel
- Domestic cat: 1-1.5", small version of bobcat

BEARS (5 toes, large):
- Black bear: Front 4-5", hind 6-7" human-like, claws 1-1.5"
- Grizzly: Front 5-6" wide, claws 2-4" extending well past toes

MUSTELIDS (5 toes, often only 4 visible):
- Raccoon: Hand-like, 2-4", very distinctive fingers
- Opossum: Star-shaped hind with opposable thumb
- Skunk: 1-2", long front claws
- Badger: 2-2.5" wide, very long front claws

RABBITS/HARES:
- Cottontail: Y-pattern, large hind 3-4" ahead of small round front 1"
- Jackrabbit: Very large hind 4-5", bounding pattern
- Snowshoe hare: Huge splayed hind feet 4-5"

RODENTS:
- Squirrel: Bounding pattern, hind 2" ahead of front 1"
- Beaver: Hind 5-6" webbed, tail drag often visible
- Muskrat: Hind 2-3", tail drag

BIRDS:
- Turkey: 4-5" long, 3 forward toes, 1 small rear
- Goose/Duck: Webbed, 3 forward toes

RESPOND WITH THIS EXACT JSON FORMAT:
{
  "animal": "common name in lowercase matching our database (e.g., 'white-tailed deer', 'coyote', 'bobcat')",
  "confidence": <0-100 integer>,
  "reasoning": "Detailed explanation citing specific features observed: track shape, toe count, claw presence, pad shape, estimated size, gait pattern if visible",
  "alternates": [
    {"name": "second possibility", "confidence": <0-100>},
    {"name": "third possibility", "confidence": <0-100>}
  ]
}

CONFIDENCE GUIDELINES:
- 80-100%: Clear track with multiple diagnostic features visible
- 60-79%: Good track but some features unclear or ambiguous
- 40-59%: Partial track or conflicting features
- 20-39%: Poor quality image, very weathered track, or uncertain
- 0-19%: Cannot identify or not actually an animal track

If the image does NOT show an animal track (shows something else entirely, or is too blurry/unclear to analyze), set confidence below 20 and explain what you see instead.

IMPORTANT: Match animal names to common database entries like: "white-tailed deer", "mule deer", "black bear", "grizzly bear", "coyote", "gray wolf", "red fox", "bobcat", "mountain lion", "raccoon", "elk", "moose", "wild turkey", "cottontail rabbit", etc.

Respond ONLY with the JSON object. No additional text before or after.`;


    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
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
