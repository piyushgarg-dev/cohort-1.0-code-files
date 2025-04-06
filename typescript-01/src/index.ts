import http from 'http';
import { env } from './env';
import { logger } from './logger';
import { createApp } from './app';

async function main() {
  try {
    const PORT: number = +(env.PORT ?? 8000);

    const server = http.createServer(createApp());
    server.listen(PORT, () => {
      logger.info(`Server is running on PORT ${PORT}`);
    });
  } catch (err) {
    logger.error(`Error starting server`, err);
  }
}

main();
