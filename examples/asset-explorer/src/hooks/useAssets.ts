import axios from 'axios';
import useSWR from 'swr';
import {
  UseAssetsResponse,
  UseAssetResponse,
  Order,
  UseAssetMinHistoryResponse,
} from 'types';

export function useAssets(page: number, order: Order): UseAssetsResponse {
  const key = `/api/assets?page=${page}&order=${order}`;
  const { data, error } = useSWR(key, () => axios.get(key));

  return {
    assets: data?.data.assets,
    isAssetsLoading: !error && !data,
    isAssetsError: error,
    hasNextPage: data?.data.hasNextPage,
  };
}

export function useAsset(policyId: string): UseAssetResponse {
  const key = `/api/asset/${policyId}`;
  const { data, error } = useSWR(key, () => axios.get(key));

  return {
    asset: data?.data,
    isAssetLoading: !error && !data,
    isAssetError: error,
  };
}

export function useAssetMintHistory(
  policyId: string,
): UseAssetMinHistoryResponse {
  const key = `/api/history?policyId=${policyId}`;
  const { data, error } = useSWR(key, () => axios.get(key));

  return {
    assetMintHistory: data?.data,
    isAssetMintHistoryLoading: !error && !data,
    isAssetMintHistoryError: error,
  };
}
