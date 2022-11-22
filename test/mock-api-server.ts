import express from 'express';
import { Server } from 'http';

import * as healthMocks from './fixtures/endpoints/health';

let server: Server;
const port = 3000;

export const setup = () => {
  console.log(`Running ryo server mock on port ${port}`);
  const app = express();

  app.get('/health', (_request, response) => {
    response.status(200).json(healthMocks.);
  });

  app.get('/blocks/latest', (_request, response) => {
    response.status(200).json(mocks.blocksLatest);
  });

  server = app.listen({ port });
};

export const teardown = () => {
  console.log(`Closing ryo server mock on port ${port}`);
  server.close();
};
