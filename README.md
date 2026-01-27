<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/14BMD3_J_ZXmXwqTEiFvjj--IoWm0DPN8

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

### Regenerating base64 images (local only)

Base64 image blobs are generated locally and are not committed.

To regenerate:

```bash
npm run gen:base64
```

The script writes `puck-base64.json` at the repository root; keep this file local for AI Studio uploads.

If you want AI Studio or external services to fetch the base64 JSON (so you can update remotely), host the JSON at a public URL (raw GitHub, Gist, S3, etc.) and set the Vite env variable `VITE_BASE64_URL` to that URL.

Quick options:
- Commit `puck-base64.json` to a public branch/path and use the raw URL `https://raw.githubusercontent.com/<owner>/<repo>/main/<path>/puck-base64.json` (note: committing it makes it public and tracked).
- Create a public GitHub Gist and use the raw gist URL.
- Upload to a public S3/Cloudflare R2 bucket and use that URL.

Then set the env variable in `.env` or in your deployment platform (Vercel/Netlify):

```bash
VITE_BASE64_URL=https://raw.githubusercontent.com/coincrosser/puck-you-website/main/puck-base64.json
```

The app will attempt to fetch this URL at startup first, and will fall back to the local `/puck-base64.json` if no remote URL is configured.
