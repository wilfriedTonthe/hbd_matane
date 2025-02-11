import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
 base:'/site_de_HBD/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
