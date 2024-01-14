console.log('Hello World');
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { z } from 'zod';
import { sequelize } from './seqPG';
import { publicProcedure, router } from './trpc';
import { getUser, getTp, getUsers, getTps, deleteTps } from './crud/get';
import { createUser, createTp } from './crud/create';
import { Tp } from './models/tp';
import { TpType } from './models/tp';

const appRouter = router({
  tp: publicProcedure
    .input(
      z
        .object({
          id: z.number(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      const tp = await getTp(input.id);
      return {
        tp: tp,
      };
    }),
  tps: publicProcedure.query(async () => {
    const tps = await getTps();
    return {
      tps: tps,
    };
  }),
  deleteTp: publicProcedure
    .input(
      z
        .object({
          id: z.number(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      const tp = await deleteTps(input.id);
      return {
        tp: tp,
      };
    }),
});
const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
  console.log('🍟The table for the User model was just (re)created!');
};

syncDatabase();

// getUsers();
// getUser(1);
//createUser();
createTp();

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    console.log('context 3');
    return {};
  },
}).listen(2022);
export type AppRouter = typeof appRouter;
