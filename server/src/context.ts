import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import decodeAndVerifyJwtToken from './jwt';
export const createContext = async (opts: CreateNextContextOptions) => {
  async function getUserFromHeader() {
    if (opts.req.headers.authorization) {
      const user = decodeAndVerifyJwtToken(opts.req.headers.authorization);
      return user;
    }
    return null;
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
};
