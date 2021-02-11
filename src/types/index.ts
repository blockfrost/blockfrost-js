export interface Options {
  projectId: string;
  isTestnet?: boolean;
  version?: number;
}

export interface ValidatedOptions {
  projectId: string;
  isTestnet?: boolean;
  version: number;
}

export interface Headers {
  project_id: string;
}

export type HashOrNumber = string | number;

export interface ErrorType {
  statusCode: string;
  message: string;
  error: string;
}
