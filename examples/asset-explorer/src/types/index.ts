export interface UseAssetsResponse {
  assets: {
    asset: string;
    quantity: string;
  }[];
  isAssetsLoading: boolean;
  isAssetsError: boolean;
  hasNextPage: boolean;
}

export interface UseAssetResponse {
  asset: {
    asset_name: string;
    fingerprint: string;
    initial_mint_tx_hash: string;
    metadata: string;
    policy_id: string;
    quantity: string;
    time: number;
  };
  isAssetLoading: boolean;
  isAssetError: boolean;
}

export interface UseAssetMinHistoryResponse {
  assetMintHistory: {
    action: string;
    amount: string;
    tx_hash: string;
  }[];
  isAssetMintHistoryLoading: boolean;
  isAssetMintHistoryError: boolean;
}

export type Order = 'asc' | 'desc';
