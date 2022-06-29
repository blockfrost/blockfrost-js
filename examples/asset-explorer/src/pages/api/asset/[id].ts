import { NextApiResponse } from 'next';
import { blockfrostAPI } from 'utils/blockfrostAPI';

export default async (req: { query: { id: string } }, res: NextApiResponse) => {
  try {
    const asset = await blockfrostAPI.assetsById(req.query.id);
    const tx = await blockfrostAPI.txs(asset.initial_mint_tx_hash);
    const block = await blockfrostAPI.blocks(tx.block);

    return res.send({
      ...asset,
      time: block.time,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Cannot load the data' });
  }
};
