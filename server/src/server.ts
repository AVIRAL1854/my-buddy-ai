import cluster from 'node:cluster';
import os from 'os';
import 'dotenv/config';

import app from './app';

const PORT: number = Number(process.env.PORT);
const environment: string = String(process.env.NODE_ENV);

if (cluster.isPrimary) {
  const cpuCountServer: number = os.cpus().length;

  const cpuCount: number = environment === 'development' ? 4 : cpuCountServer;

  console.log(`Primary ${process.pid} running`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(PORT, () => {
    console.log(
      `Worker processId ${process.pid} listening on Port: http://localhost:${PORT}/`,
    );
  });
}
