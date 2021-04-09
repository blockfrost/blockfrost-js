declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PROJECT_ID: string;
    }
  }
}

export {};
