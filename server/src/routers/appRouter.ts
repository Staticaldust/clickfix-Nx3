import { publicProcedure, router } from '../trpc';
import { db } from '../crud/get';
import { TRPCError } from '@trpc/server';
import { createUser } from '../crud/get';
export const appRouter = router({
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
  reviews: publicProcedure.query(async (opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const reviews = await db.reviews.getReviews();
    return {
      reviews: reviews,
    };
  }),
  users: publicProcedure.query(async (opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    const users = await db.users.getUsers();
    return {
      users: users,
    };
  }),
  createUser: publicProcedure.mutation(async ({ input }) => {
    const user = await createUser(input);
    return {
      user,
    };
  }),
});
