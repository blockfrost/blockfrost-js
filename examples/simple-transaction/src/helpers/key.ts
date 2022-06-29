import * as CardanoWasm from '@emurgo/cardano-serialization-lib-nodejs';
import { mnemonicToEntropy } from 'bip39';

const harden = (num: number): number => {
  return 0x80000000 + num;
};

export const deriveAddressPrvKey = (
  bipPrvKey: CardanoWasm.Bip32PrivateKey,
  testnet: boolean,
): {
  signKey: CardanoWasm.PrivateKey;
  address: string;
} => {
  const networkId = testnet
    ? CardanoWasm.NetworkInfo.testnet().network_id()
    : CardanoWasm.NetworkInfo.mainnet().network_id();
  const accountIndex = 0;
  const addressIndex = 0;

  const accountKey = bipPrvKey
    .derive(harden(1852)) // purpose
    .derive(harden(1815)) // coin type
    .derive(harden(accountIndex)); // account #

  const utxoKey = accountKey
    .derive(0) // external
    .derive(addressIndex);

  const stakeKey = accountKey
    .derive(2) // chimeric
    .derive(0)
    .to_public();

  const baseAddress = CardanoWasm.BaseAddress.new(
    networkId,
    CardanoWasm.StakeCredential.from_keyhash(
      utxoKey.to_public().to_raw_key().hash(),
    ),
    CardanoWasm.StakeCredential.from_keyhash(stakeKey.to_raw_key().hash()),
  );

  const address = baseAddress.to_address().to_bech32();

  return { signKey: utxoKey.to_raw_key(), address: address };
};

export const mnemonicToPrivateKey = (
  mnemonic: string,
): CardanoWasm.Bip32PrivateKey => {
  const entropy = mnemonicToEntropy(mnemonic);

  const rootKey = CardanoWasm.Bip32PrivateKey.from_bip39_entropy(
    Buffer.from(entropy, 'hex'),
    Buffer.from(''),
  );

  return rootKey;
};
