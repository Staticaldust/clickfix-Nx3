import { initTRPC, TRPCError } from '@trpc/server';
import type { createContext } from './context';

const t = initTRPC.context<typeof createContext>().create();

const userAuthMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Invalid credentials',
    });
  }
  return next();
});

export type AppRouter = typeof appRouter;
export const router = t.router;
export const publicProcedure = t.procedure;
export const userAuthProcedures = t.procedure.use(userAuthMiddleware);
