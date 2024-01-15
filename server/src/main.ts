console.log('Hello World');
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { z } from 'zod';
import { sequelize } from './seqPG';
import { publicProcedure, router } from './trpc';
import {
  getUser,
  getTp,
  getUsers,
  getTps,
  userAuthentication,
} from './crud/get';
import { createTp, createUser } from './crud/create';

const appRouter = router({
  user: publicProcedure
    .input(
      z
        .object({
          id: z.number(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      const user = await getUser(input.id);
      return {
        user: user,
      };
    }),
  users: publicProcedure.query(async () => {
    const users = await getUsers();
    return {
      users: users,
    };
  }),
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
  userLogin: publicProcedure
    .input(
      z
        .object({
          email: z.string(),
          password: z.string(),
        })
        .nullish()
    )
    .query(async ({ input }) => {
      const doesExist = await userAuthentication(input.email, input.password);
      return {
        doesExist: doesExist,
      };
    }),
  // deleteTp: publicProcedure
  //   .input(
  //     z
  //       .object({
  //         id: z.number(),
  //       })
  //       .nullish()
  //   )
  //   .query(async ({ input }) => {
  //     const tp = await deleteTps(input.id);
  //     return {
  //       tp: tp,
  //     };
  //   }),
});
const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();

// getUsers();
// getUser(1);
// createUser();
// createTp();

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    console.log('context 3');
    return {};
  },
}).listen(2022);
console.log('hi');

export type AppRouter = typeof appRouter;
