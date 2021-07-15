import { components } from './types/OpenApi';
import { ErrorType } from './types';
import dotenv from 'dotenv';

dotenv.config();

import { BlockFrostAPI } from './BlockFrostAPI';
import { BlockFrostIPFS } from './BlockFrostIPFS';

type Responses = components['schemas'];
type Error = ErrorType;

export { BlockFrostAPI, BlockFrostIPFS };

export type { Responses, Error };
