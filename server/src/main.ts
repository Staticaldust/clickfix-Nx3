import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { appRouter } from './routers/appRouter';
import { syncDatabase } from './sequelize';
import { createContext } from './context';

syncDatabase();

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext: createContext,
});

server.listen(2022);
console.log('HTTP Server listening on port 2022');
export type AppRouter = typeof appRouter;
