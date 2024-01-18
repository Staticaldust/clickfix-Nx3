// import { z } from 'zod';
// import { initTRPC, TRPCError } from '@trpc/server';
// import type { Context } from './context';
// import { router, publicProcedure } from './trpc';

// export const t = initTRPC.context<Context>().create();

// const appRouter = router({
//   // open for anyone
//   hello: t.procedure
//     .input(z.string().nullish())
//     .query((opts) => `hello ${opts.input ?? opts.ctx.user?.name ?? 'world'}`),
//   // checked in resolver
//   secret: t.procedure.query((opts) => {
//     if (!opts.ctx.user) {
//       throw new TRPCError({ code: 'UNAUTHORIZED' });
//     }
//     return {
//       secret: 'sauce',
//     };
//   }),
// });
// export type AppRouter = typeof appRouter;

// console.log('Hayoosh');
// import { expressjwt } from 'express-jwt';
// import { createHTTPServer } from '@trpc/server/adapters/standalone';
// import cors from 'cors';
// import { z } from 'zod';
// import { sequelize } from './seqPG';
// import { publicProcedure, router, userAuthProcedures } from './trpc';
// import {
//   getUser,
//   getTp,
//   getUsers,
//   getTps,
//   userAuthentication,
// } from './crud/get';

// const appRouter = router({
//   user: publicProcedure
//     .input(
//       z
//         .object({
//           id: z.number(),
//         })
//         .nullish()
//     )
//     .query(async ({ input }) => {
//       const user = await getUser(input.id);
//       return {
//         user: user,
//       };
//     }),
//   users: publicProcedure.query(async () => {
//     const users = await getUsers();
//     return {
//       users: users,
//     };
//   }),
//   tp: publicProcedure
//     .input(
//       z
//         .object({
//           id: z.number(),
//         })
//         .nullish()
//     )
//     .query(async ({ input }) => {
//       const tp = await getTp(input.id);
//       return {
//         tp: tp,
//       };
//     }),
//   tps: userAuthProcedures.query(async () => {
//     const tps = await getTps();
//     return {
//       tps: tps,
//     };
//   }),
//   userLogin: publicProcedure
//     .input(
//       z
//         .object({
//           email: z.string(),
//           password: z.string(),
//         })
//         .nullish()
//     )
//     .query(async ({ input }) => {
//       console.log(`Attempting user login for email: ${input.email}`);
//       const doesExist = await userAuthentication(input.email, input.password);
//       console.log('User login result:', doesExist);
//       return {
//         doesExist: doesExist,
//       };
//     }),

// });
// const syncDatabase = async () => {
//   try {
//     console.log('Attempting to synchronize database...');
//     await sequelize.sync();
//     console.log('Database synchronized');
//   } catch (error) {
//     console.error('Error synchronizing database:', error);
//     console.error('Error stack trace:', error.stack);
//   }
// };

// syncDatabase();

// // getUsers();
// // getUser(1);
// // createUser();
// // createTp();

// createHTTPServer({
//   middleware: cors(),
//   router: appRouter,
//   createContext() {
//     console.log('HTTP Server context created');
//     return {};
//   },
// }).listen(2022);
// console.log('HTTP Server listening on port 2022');

// export type AppRouter = typeof appRouter;
console.log('Hello World');
import { initTRPC, TRPCError } from '@trpc/server';
import type { createContext } from './context';
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
      console.log(`Attempting user login for email: ${input.email}`);
      const doesExist = await userAuthentication(input.email, input.password);
      console.log('User login result:', doesExist);
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
    console.log('Attempting to synchronize database...');
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
    console.error('Error stack trace:', error.stack);
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
    console.log('HTTP Server context created');
    return {};
  },
}).listen(2022);
console.log('HTTP Server listening on port 2022');
