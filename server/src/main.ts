import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { z } from 'zod';
import { syncDatabase } from './sequelize';
import { protectedProcedure, publicProcedure, router } from './trpc';
import { db } from './crud/get';
import { MaybePromise } from '@trpc/server';
import { NodeHTTPCreateContextFnOptions } from '@trpc/server/dist/adapters/node-http';
import { IncomingMessage, ServerResponse } from 'http';

const appRouter = router({
  // user: publicProcedure
  //   .input(z.object({ id: z.number() }))
  //   .query(async ({ input }) => {
  //     const user = await db.users.getUser(input.id);
  //     return {
  //       user: user,
  //     };
  //   }),
  // users: publicProcedure.query(async () => {
  //   const users = await db.users.getUsers();
  //   return {
  //     users: users,
  //   };
  // }),
  tp: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const tp = await db.tps.getTp(input.id);
      return {
        tp: tp,
      };
    }),
  tps: protectedProcedure.query(async () => {
    const tps = await db.tps.getTps();
    return {
      tps: tps,
    };
  }),
  // userLogin: publicProcedure
  //   .input(z.object({ email: z.string(), password: z.string() }))
  //   .query(async ({ input }) => {
  //     console.log(`Attempting user login for email: ${input.email}`);
  //     const doesExist = await userAuthentication(input.email, input.password);
  //     console.log('User login result:', doesExist);
  //     return {
  //       doesExist: doesExist,
  //     };
  //   }),
});

export type AppRouter = typeof appRouter;

syncDatabase();

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext: function (
    opts: NodeHTTPCreateContextFnOptions<
      IncomingMessage,
      ServerResponse<IncomingMessage>
    >
  ): MaybePromise<{ user: any }> {
    throw new Error('Function not implemented.');
  },
});

server.listen(2022);
console.log('HTTP Server listening on port 2022');
