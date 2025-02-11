import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 base: "/site_de_HBD/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
