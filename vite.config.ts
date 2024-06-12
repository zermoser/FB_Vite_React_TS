import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FB_Vite_React_TS/',
  plugins: [react()],
  server: {
    port: 3001,
  },
});
