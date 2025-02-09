import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const baseUrl = mode === 'production' ? env.VITE_BASE_URL : '/';
  return {
    plugins: [react()],
    base: baseUrl,
  };
});
