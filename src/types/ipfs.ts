type State = 'queued' | 'pinned' | 'unpinned' | 'failed' | 'gc';

export type AddResponse = {
  name: string;
  ipfs_hash: string;
  size: number;
};

export type PinResponse = {
  ipfs_hash: string;
  state: State;
};

export type ListResponse = {
  time_created: number;
  time_pinned: number;
  ipfs_hash: string;
  size: string;
  state: State;
};
