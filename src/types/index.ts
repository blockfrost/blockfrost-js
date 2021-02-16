type OptionCombination1 = { projectId: string; customBackend?: string };
type OptionCombination2 = { projectId?: string; customBackend: string };
type AdditionalOptions = { isTestnet?: boolean; version?: number };

export type Options = (OptionCombination1 | OptionCombination2) &
  AdditionalOptions;

export interface ValidatedOptions {
  customBackend?: string;
  projectId?: string;
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
