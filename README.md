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

## Recommended: migrate CI to GitHub OIDC (best practice)

Using GitHub OIDC + a Google Cloud service account is more secure than a long-lived `FIREBASE_TOKEN` secret. Follow these steps to set it up (you need `gcloud` installed and permissions on the GCP project).

1) Create a GCP service account (replace `PROJECT_ID`):

```bash
gcloud iam service-accounts create github-deployer \
   --project=PROJECT_ID \
   --display-name="GitHub Actions Deployer"

SA_EMAIL=github-deployer@PROJECT_ID.iam.gserviceaccount.com
```

2) Grant the service account permissions for Firebase Hosting:

```bash
gcloud projects add-iam-policy-binding PROJECT_ID \
   --member="serviceAccount:${SA_EMAIL}" \
   --role="roles/firebasehosting.admin"
```

3) Create a Workload Identity Pool and OIDC provider:

```bash
gcloud iam workload-identity-pools create github-pool \
   --project=PROJECT_ID --location="global" --display-name="GitHub Actions Pool"

gcloud iam workload-identity-pools providers create-oidc github-provider \
   --project=PROJECT_ID --location="global" \
   --workload-identity-pool=github-pool \
   --issuer-uri="https://token.actions.githubusercontent.com" \
   --allowed-audiences="https://github.com/" \
   --display-name="GitHub OIDC provider"
```

4) Allow the repo to impersonate the service account (replace placeholders):

```bash
gcloud iam service-accounts add-iam-policy-binding ${SA_EMAIL} \
   --project=PROJECT_ID \
   --role="roles/iam.workloadIdentityUser" \
   --member="principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/attribute.repository/OWNER/REPO"
```

5) Update the OIDC Actions workflow

Open `.github/workflows/firebase-deploy-oidc.yml` and replace the placeholder values for `workload_identity_provider` and `service_account` with your real values. Then push the change to `main`.

6) Remove the long-lived token

Once the OIDC workflow runs successfully, delete the `FIREBASE_TOKEN` secret in GitHub (Settings → Secrets and variables → Actions) to avoid accidental leakage.

Resources:
- Workload Identity Federation docs: https://cloud.google.com/iam/docs/workload-identity-federation
- GitHub actions auth: https://github.com/google-github-actions/auth

