import { components } from './types/OpenApi';
import dotenv from 'dotenv';

dotenv.config();

import { BlockFrostAPI } from './BlockFrostAPI';
import { BlockFrostIPFS } from './BlockFrostIPFS';

type Responses = components['schemas'];

export { BlockFrostAPI, BlockFrostIPFS };

export type { Responses };
