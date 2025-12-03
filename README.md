# TrackID by Arterburn Outdoors 🐾

AI-powered animal track identification app. Snap a photo of any animal track and get instant identification with confidence scores, habitat info, and more.

## Features

- 📷 **Camera Capture** - Take photos directly in the app
- 🔍 **AI Identification** - Powered by Claude AI vision
- 📊 **Confidence Scores** - Know how sure the AI is
- 📚 **Animal Library** - Browse 35+ North American species
- 📜 **Scan History** - Track your discoveries
- 📱 **PWA Support** - Install on your home screen

## Deployment to Netlify

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. In your terminal:
   ```bash
   cd trackid
   git init
   git add .
   git commit -m "Initial commit - TrackID by Arterburn Outdoors"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/trackid.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your `trackid` repository
5. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Step 3: Add Your API Key

1. In Netlify, go to **Site settings** → **Environment variables**
2. Click "Add a variable"
3. Set:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Claude API key from [console.anthropic.com](https://console.anthropic.com)
4. Click "Create variable"
5. Go to **Deploys** and click "Trigger deploy" → "Deploy site"

### Step 4: Add App Icons (Optional)

For a polished PWA experience, generate app icons:

1. Use a tool like [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
2. Upload to the `public` folder:
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
3. Redeploy

## Local Development

```bash
npm install
npm run dev
```

Note: The identify feature requires the Netlify function, so it won't work locally without additional setup.

## Tech Stack

- React 18
- Vite
- Netlify Functions
- Claude AI (Anthropic API)
- PWA

## Customization

### Adding Animals

Edit `src/data/animals.js` to add new species. Each animal needs:
- `name` - Common name
- `scientificName` - Latin name
- `category` - Group (Ungulate, Bear, Cat, etc.)
- `description` - Brief overview
- `habitat` - Where they live
- `range` - Geographic distribution
- `diet` - What they eat
- `trackDescription` - Details about their tracks
- `behavior` - Notable behaviors
- `image` - URL to a photo (Wikimedia Commons works well)

### Branding

Update colors in `src/styles.css` under the `:root` CSS variables.

## License

© Arterburn Outdoors

---

Built with ❤️ for the outdoors
