/// <reference types="vite/client" />

declare module 'bootstrap/dist/js/bootstrap.bundle.min';
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Extend React's HTMLImageElement attributes to include fetchpriority (lowercase)
declare global {
  namespace React {
    interface ImgHTMLAttributes<T> {
      fetchpriority?: 'high' | 'low' | 'auto';
    }
  }
}

export {};
