export const GEMINI_MODEL = 'gemini-flash-lite';

// Keep API key in env: Vite exposes via import.meta.env.VITE_GEMINI_API_KEY
export const GEMINI_KEY_ENV = 'VITE_GEMINI_API_KEY';

// Optional public URL hosting puck-base64.json (raw GitHub/Gist/etc.)
export const BASE64_URL: string | undefined = (import.meta.env as any).VITE_BASE64_URL;
