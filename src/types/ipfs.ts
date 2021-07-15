export type AddParams =
  | {
      sourceType: 'url';
      path: string;
    }
  | {
      sourceType: 'file';
      fileContent: string;
    };
