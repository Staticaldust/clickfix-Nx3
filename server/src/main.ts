console.log('Hello World');
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { z } from 'zod';
import { sequelize } from './seqPG';
import { publicProcedure, router } from './trpc';
import { getUser, getTp, getUsers, getTps } from './crud/get';
import { createUser, createTp } from './crud/create';
import { Tp } from './models/tp';

const appRouter = router({
  greeting: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      const { name } = input;
      return {
        text: `hello ${name ?? 'world'}`,
      };
    }),
  userNew: publicProcedure
    .input(
      z
        .object({
          // email:z .string().nullish(),
          id: z.number(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      let users: object | null = null;
      if (input?.id !== undefined) {
        users = await getUser(input.id);
      }
      return {
        // text: `your ${input?.email }`,
        users: users,
      };
    }),
  tp: publicProcedure
    .input(
      z
        .object({
          // email:z .string().nullish(),
          id: z.number(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      let tp: object;
      if (input?.id !== undefined) {
        tp = await getTp(input.id);
      } else {
        tp = await getTps();
      }
      return {
        tp: tp,
      };
    }),
  // tps: publicProcedure.input(z.object({}).nullish()).query(async () => {
  //   const tps: object | null = await getTps();
  //   console.log(tps, 2);
  //   return { tps: tps };
  // }),
});
const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
  console.log('🍟The table for the User model was just (re)created!');
};

syncDatabase();

// getUsers();
// getUser(1);
//createUser();
// createTp();

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    console.log('context 3');
    return {};
  },
}).listen(2022);
export type AppRouter = typeof appRouter;
