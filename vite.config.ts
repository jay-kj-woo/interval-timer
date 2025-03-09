import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createManifestForPWA } from './manifestPWA';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const baseUrl = mode === 'production' ? env.VITE_BASE_URL : '/';
  const manifest = createManifestForPWA(baseUrl);
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  return {
    plugins: [react()],
    base: baseUrl,
  };
});
