declare namespace gapi {
  namespace auth2 {
    interface GoogleAuth {
      getAuthInstance(): GoogleAuthInstance;
    }

    interface GoogleAuthInstance {
      signIn(): Promise<void>;
      signOut(): Promise<void>;
      isSignedIn: {
        get(): boolean;
      };
    }
  }
}

declare let gapi: {
  auth2: {
    init(params: {
      client_id: string;
      scope?: string;
    }): Promise<gapi.auth2.GoogleAuth>;
    getAuthInstance(): gapi.auth2.GoogleAuthInstance;
  };
};
