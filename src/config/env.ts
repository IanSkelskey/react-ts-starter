/**
 * Build-time configuration. All `VITE_*` env vars are inlined by Vite.
 * Add new entries here rather than reading `import.meta.env` across the app.
 */
export const APP_VERSION = "0.1.0";

export const API_URL = import.meta.env.VITE_API_URL ?? "";
