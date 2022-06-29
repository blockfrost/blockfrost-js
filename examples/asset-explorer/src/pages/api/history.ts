import { NextApiResponse } from 'next';
import { blockfrostAPI } from 'utils/blockfrostAPI';

export default async (
  req: { query: { policyId: string } },
  res: NextApiResponse,
) => {
  try {
    const assetHistory = await blockfrostAPI.assetsHistory(req.query.policyId);
    return res.send(assetHistory);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Cannot load the data' });
  }
};
