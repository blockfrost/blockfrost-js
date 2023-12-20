import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';
import { components } from '@blockfrost/openapi';

/**
 * Obtains detailed network information.
 * @see {@link https://docs.blockfrost.io/#tag/Cardano-Network/paths/~1network/get | API docs for Network information}
 *
 * @returns Detailed network information.
 *
 */
export async function network(
  this: BlockFrostAPI,
): Promise<components['schemas']['network']> {
  try {
    const res =
      await this.instance<components['schemas']['network']>(`network`);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
