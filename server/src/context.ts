import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import verifyJWT from './jwt';
import { TRPCError } from '@trpc/server';
export const createContext = async (opts: CreateNextContextOptions) => {
  // async function getUserFromHeader() {
  //   if (opts.req.headers.authorization) {
  //     const user = verifyJWT(opts.req.headers.authorization);
  //     return user;
  //   }
  //   return null;
  // }
  // const user = await getUserFromHeader();
  const user = verifyJWT(opts.req.headers.authorization);
  console.log(user);
  return {
    user,
  };
};
