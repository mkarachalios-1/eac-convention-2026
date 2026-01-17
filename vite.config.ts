import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), '');
  const base = process.env.VITE_BASE ?? fileEnv.VITE_BASE ?? '/';
  return {
    base,
    plugins: [react()],
    server: { port: 5173, strictPort: true },
  };
});
