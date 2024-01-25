import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { appRouter } from './routers/appRouter';
// import { syncDatabase } from './sequelize';
import { createContext } from './context';
import { createTableUsers } from './models/user';
import { createTableAdmin } from './models/admin';
import { createTableCategory } from './models/category';
import { createTableTp } from './models/tp';
import { createTableReview } from './models/reviewe';

// syncDatabase();
// createTableUsers();
// createTableAdmin();
// createTableCategory();
// createTableTp();
// createTableReview();
const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext: createContext,
});

server.listen(2022);
console.log('HTTP Server listening on port 2022');
export type AppRouter = typeof appRouter;
