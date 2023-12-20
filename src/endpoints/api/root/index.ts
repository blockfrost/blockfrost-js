import { handleError } from '../../../utils/errors';
import { BlockFrostAPI } from '../../../index';

/**
 * Obtains backend version number.
 *
 * @returns Backend version in a format `{ url: string; version: string }`
 *
 */
export async function root(
  this: BlockFrostAPI,
): Promise<{ url: string; version: string }> {
  try {
    const res = await this.instance<{ url: string; version: string }>(``);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
