declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (options: {
            client_id: string;
            callback: (response: unknown) => void;
          }) => void;
          renderButton: (
            container: HTMLElement,
            options: {
              theme: string;
              size: string;
            }
          ) => void;
          prompt: () => void;
        };
      };
    };
  }
}

// If you want to retain global declarations for future use, keep the `declare global` block.
