import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { appRouter } from './routers/appRouter';
// import { syncDatabase } from './sequelize';
import { createContext } from './context';
import { createTableUsers, createUser, UserDetails } from './models/user';
import { createTableAdmin, createAdmin, adminDetails } from './models/admin';
import {
  createTableCategory,
  createCategory,
  categoryDetails,
} from './models/category';
import { ReviewData, ReviewDetails } from './models/reviewe';
import { createTableTp, createTp, tpDetails } from './models/tp';
import { createTableReview } from './models/reviewe';

// syncDatabase();
// createTableUsers();
// createTableAdmin();
// createTableCategory();
// createTableTp();
// createTableReview();
// createAdmin(adminDetails);
// createCategory(categoryDetails);
//createTp(tpDetails);
//UserDetails.forEach((user) => createUser(user));
const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext: createContext,
});

server.listen(2022);
console.log('HTTP Server listening on port 2022');
export type AppRouter = typeof appRouter;
