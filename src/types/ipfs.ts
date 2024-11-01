import { paths } from '@blockfrost/openapi';

export type PinResponse =
  paths['/ipfs/pin/add/{IPFS_path}']['post']['responses']['200']['content']['application/json'];

export type AddResponse =
  paths['/ipfs/add']['post']['responses']['200']['content']['application/json'];

export type ListResponse =
  paths['/ipfs/pin/list']['get']['responses']['200']['content']['application/json'];
