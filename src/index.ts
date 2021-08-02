import { components } from './types/OpenApi';
import { ErrorType } from './types';
import { BlockFrostAPI } from './BlockFrostAPI';
import { BlockFrostIPFS } from './BlockFrostIPFS';

type Responses = components['schemas'];
type Error = ErrorType;

export { BlockFrostAPI, BlockFrostIPFS };

export type { Responses, Error };
