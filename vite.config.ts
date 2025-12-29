import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import path from 'path'

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
  resolve: {
    alias: {
      // Force a single React instance to prevent version mismatch errors
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor chunks - critical for initial load
          if (id.includes('node_modules')) {
            // Keep React and React-DOM together to avoid internals issues
            // This is critical - they must be in the same chunk
            if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) {
              return 'react-vendor';
            }
            // React-dependent libraries must be in react-vendor to ensure React loads first
            if (
              id.includes('react-router') ||
              id.includes('react-helmet') ||
              id.includes('react-bootstrap') ||
              id.includes('react-select') ||
              id.includes('react-icons') ||
              id.includes('react-transition-group') ||
              id.includes('@fortawesome/react-fontawesome')
            ) {
              return 'react-vendor';
            }
            // Carousel - lazy loaded component
            if (id.includes('react-slick') || id.includes('slick-carousel')) {
              return 'carousel';
            }
            // Other vendor code (non-React dependencies)
            return 'vendor';
          }
        },
        // Ensure react-vendor loads before other chunks
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'react-vendor') {
            return 'assets/react-vendor-[hash].js';
          }
          return 'assets/[name]-[hash].js';
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
    force: true, // Force re-optimization
  },
  esbuild: {
    legalComments: 'none',
    treeShaking: true,
  },
})
