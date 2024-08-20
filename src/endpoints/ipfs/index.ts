import { BlockFrostIPFS } from '../../index';
import { handleError } from '../../utils/errors';
import { getPaginationOptions } from '../../utils';
import { PaginationOptions } from '../../types';
import { AddResponse, PinResponse, ListResponse } from '../../types/ipfs';
import FormData from 'form-data';
import fs from 'fs';

/**
 * Adds a file to IPFS
 * @see {@link https://docs.blockfrost.io/#tag/IPFS-Add | API docs for Add a file to IPFS}
 * @remarks
 * You need to `pin` an object to avoid it being garbage collected. This usage is being counted in your user account quota.
 *
 * @param path - path to the file
 * @returns information about added ipfs object
 */
export async function add(
  this: BlockFrostIPFS,
  path: string,
): Promise<AddResponse> {
  const stream = fs.createReadStream(path);
  const data = new FormData();

  data.append('file', stream);

  try {
    const res = await this.instance.post<AddResponse>(`ipfs/add`, {
      body: data,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data.getBoundary()}`,
      },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Retrieve an object from the IPFS gateway
 * @see {@link https://docs.blockfrost.io/#tag/IPFS-Gateway/paths/~1ipfs~1gateway~1%7BIPFS_path%7D/get | API docs for Relay to an IPFS gateway}
 * @remarks
 * Useful if you do not want to rely on a public gateway, such as ipfs.blockfrost.dev.
 *
 * @param path - path to the file
 * @returns the object content
 *
 */
export async function gateway(
  this: BlockFrostIPFS,
  path: string,
): Promise<unknown> {
  try {
    const res = await this.instance.get(`ipfs/gateway`, {
      searchParams: { path },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Pins the IPFS resource.
 * @see {@link https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1add~1%7BIPFS_path%7D/post | API docs for Pin an object}
 * @remarks
 * IPFS pinning refers to the process of specifying data to be retained and persist on one or more IPFS nodes.
 *
 * @param path - path to the file
 * @returns Pinned object
 */
export async function pin(
  this: BlockFrostIPFS,
  path: string,
  options?: { filecoin?: boolean },
): Promise<PinResponse> {
  try {
    const res = await this.instance.post<PinResponse>(`ipfs/pin/add/${path}`, {
      searchParams: {
        ...(options?.filecoin !== undefined && { filecoin: options.filecoin }),
      },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * List pinned IPFS resources.
 * @see {@link https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1list/get | API docs for List pinned objects}
 *
 * @param pagination - Optional, Pagination options
 * @returns List of pinned IPFS objects
 *
 */
export async function list(
  this: BlockFrostIPFS,
  pagination?: PaginationOptions,
): Promise<ListResponse> {
  const paginationOptions = getPaginationOptions(pagination);
  try {
    const res = await this.instance<ListResponse>(`ipfs/pin/list`, {
      searchParams: {
        page: paginationOptions.page,
        count: paginationOptions.count,
        order: paginationOptions.order,
      },
    });
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Obtains information about locally pinned IPFS object
 * @see {@link https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1list~1%7BIPFS_path%7D/get | API docs for Details about pinned object}
 *
 * @param path - The path to the IPFS object (IPFS hash)
 * @returns List of pinned IPFS objects
 *
 */
export async function listByPath(
  this: BlockFrostIPFS,
  path: string,
): Promise<ListResponse> {
  try {
    const res = await this.instance<ListResponse>(`ipfs/pin/list/${path}`);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}

/**
 * Removes pinned object from local storage
 * @see {@link https://docs.blockfrost.io/#tag/IPFS-Pins/paths/~1ipfs~1pin~1remove~1%7BIPFS_path%7D/post | API docs for Remove a IPFS pin}
 *
 * @param path - The path to the IPFS object (IPFS hash)
 * @returns List of pinned IPFS objects
 *
 */
export async function pinRemove(
  this: BlockFrostIPFS,
  path: string,
): Promise<string> {
  try {
    const res = await this.instance.post<string>(`ipfs/pin/remove/${path}`);
    return res.body;
  } catch (error) {
    throw handleError(error);
  }
}
