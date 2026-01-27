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
