import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap'],
          icons: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons', 'react-icons'],
          carousel: ['react-slick', 'slick-carousel'],
          swiper: ['swiper'],
          utils: ['jwt-decode', 'file-saver'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@fortawesome/fontawesome-svg-core'],
  },
})
