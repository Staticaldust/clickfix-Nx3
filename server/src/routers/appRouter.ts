import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { db } from '../crud/get';
import { TRPCError } from '@trpc/server';
export const appRouter = router({
  // tp: publicProcedure
  //   .input(z.object({ id: z.number() }))
  //   .query(async ({ input }) => {
  //     // if (!opts.ctx.user) {
  //     //   throw new TRPCError({ code: 'UNAUTHORIZED' });
  //     // }
  //     const tp = await db.tps.getTp(input.id);
  //     return {
  //       tp: tp,
  //     };
  //   }),
  tps: publicProcedure.query(async (opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const tps = await db.tps.getTps();
    return {
      tps: tps,
    };
  }),
  categories: publicProcedure.query(async (opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const categories = await db.categories.getCategories();
    return {
      categories: categories,
    };
  }),
});
