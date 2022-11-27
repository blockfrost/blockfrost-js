import express from 'express';
import { Server } from 'http';

import mocks from './fixtures/blockfrost';

let server: Server;
const port = 3000;

export const setup = () => {
  console.log(`Running server mock on port ${port}`);

  const app = express();

  app.use((req, res, _next) => {
    if (req.status === 403) {
      res.send({
        error: 'Forbidden',
        message: 'Invalid project token.',
        status_code: 403,
      });
    }
  });

  app.get('/', (_request, response) => {
    response.status(200).json(mocks.root);
  });

  app.get('/health', (_request, response) => {
    response.status(200).json(mocks.health);
  });

  app.get('/metrics', (_request, response) => {
    response.status(200).json(mocks.metrics);
  });

  app.get('/metrics/endpoints', (_request, response) => {
    response.status(200).json(mocks.metricsEndpoints);
  });

  server = app.listen({ port });
};

export const teardown = () => {
  console.log(`Closing server mock on port ${port}`);
  server.close();
};
