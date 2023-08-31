import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import PurgeCSS from 'vite-plugin-purgecss';
import path from 'path'; // Add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    PurgeCSS({
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    })
  ],
  css: {
    postcss: './postcss.config.cjs'
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src/'), // Add this alias configuration
    }
  }
});
