import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from './context';
export const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async function isAuthed(
  opts
) {
  const { ctx } = opts;
  // `ctx.user` is nullable
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next({
    ctx: {
      // ✅ user value is known to be non-null now
      user: ctx.user,
    },
  });
});

t.router({
  // this is accessible for everyone
  hello: t.procedure
    .input(z.string().nullish())
    .query((opts) => `hello ${opts.input ?? opts.ctx.user?.name ?? 'world'}`),
  admin: t.router({
    // this is accessible only to admins
    secret: protectedProcedure.query((opts) => {
      return {
        secret: 'sauce',
      };
    }),
  }),
});

// import { initTRPC, TRPCError } from '@trpc/server';
// import { Context } from './context';

// const t = initTRPC.context<Context>().create();

// export const router = t.router;

// export const publicProcedure = t.procedure;

// const userAuthMiddleware = t.middleware(({ ctx, next }) => {
//   if (!ctx.user) {
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//       message: 'Invalid credentials',
//     });
//   }
//   return next();
// });

// export type AppRouter = typeof appRouter;

// export const userAuthProcedures = t.procedure.use(userAuthMiddleware);
