import EmurgoCip from '@emurgo/cip14-js';

export const hexToString = (input: string) => {
  const hex = input.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }

  return str;
};

export const getFingerprint = (policyId: string, assetName?: string) =>
  new EmurgoCip(
    Uint8Array.from(Buffer.from(policyId, 'hex')),
    Uint8Array.from(Buffer.from(assetName ? assetName : '', 'hex')),
  ).fingerprint();
