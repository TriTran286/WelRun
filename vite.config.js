import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base: '/WelRun/', // Adjust base path for deployment, if necessary
  plugins: [
    react({
      include: "**/*.jsx", // Ensure JSX files are included
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    rollupOptions: {
      input: './index.html', // Entry point for the app
      output: {
        entryFileNames: 'assets/[name]-[hash].js', // Add hash for cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]', // Include hash for assets
      }
    }
  },
  server: {
    port: 3000, // Specify port for dev server
    open: true, // Automatically open in browser
    strictPort: true, // Exit if port is unavailable
  },
  resolve: {
    alias: {
      '@': '/src', // Define `@` as alias for `/src`
    },
  },
});
