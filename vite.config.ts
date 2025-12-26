import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor chunks - critical for initial load
          if (id.includes('node_modules')) {
            // React core - separate react and react-dom for better caching
            if (id.includes('react/') || id.includes('react/index')) {
              return 'react-core';
            }
            if (id.includes('react-dom')) {
              return 'react-dom';
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
            // Helmet - needed early
            if (id.includes('react-helmet')) {
              return 'helmet';
            }
            // Scheduler (used by React) - keep with react-core
            if (id.includes('scheduler')) {
              return 'react-core';
            }
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
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
    ],
    exclude: ['@fortawesome/fontawesome-svg-core'],
  },
  esbuild: {
    legalComments: 'none',
    treeShaking: true,
  },
})
