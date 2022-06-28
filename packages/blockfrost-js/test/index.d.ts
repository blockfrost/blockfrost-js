/// <reference types="jest" />

declare namespace jest {
  // noinspection JSUnusedGlobalSymbols
  interface Matchers<R> {
    /**
     * @param {String} type
     */
    toBeTypeOrNull(type: string): R;
  }

  interface Expect {
    /**
     * @param {String} expectedType
     */
    toBeTypeOrNull(expectedType: any): any;
  }
}
