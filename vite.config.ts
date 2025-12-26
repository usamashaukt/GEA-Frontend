import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor chunks - critical for initial load
          if (id.includes('node_modules')) {
            // React core - highest priority
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            // Router - needed early for navigation
            if (id.includes('react-router')) {
              return 'router';
            }
            // React-Bootstrap components (minimal)
            if (id.includes('react-bootstrap')) {
              return 'bootstrap';
            }
            // Icons - defer loading
            if (id.includes('@fortawesome') || id.includes('react-icons')) {
              return 'icons';
            }
            // Carousel - lazy loaded component
            if (id.includes('react-slick') || id.includes('slick-carousel')) {
              return 'carousel';
            }
            // Swiper - lazy loaded component
            if (id.includes('swiper')) {
              return 'swiper';
            }
            // Other utilities - defer
            if (id.includes('jwt-decode') || id.includes('file-saver') || id.includes('react-select') || id.includes('react-transition-group')) {
              return 'utils';
            }
            // Helmet - needed early
            if (id.includes('react-helmet')) {
              return 'helmet';
            }
            // Default vendor chunk for other node_modules
            return 'vendor';
          }
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
