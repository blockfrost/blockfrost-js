declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PROJECT_ID: string;
      BLOCKFROST_DEBUG: boolean;
    }
  }
}

export {};
