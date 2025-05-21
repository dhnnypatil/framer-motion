import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Make sure this matches your GitHub repository name exactly
  base: '/framer-motion/',
  build: {
    // Ensure source maps are generated for easier debugging
    sourcemap: true,
    // Output more information during build
    reportCompressedSize: true,
    // Make sure assets are correctly processed
    assetsInlineLimit: 4096
  }
})
