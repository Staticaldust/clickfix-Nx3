import * as trpcNext from '@trpc/server/adapters/next';
import { decodeAndVerifyJwtToken } from './jwt';

export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  const getUserFromHeader = async () => {
    if (req.headers.authorization) {
      const user = await decodeAndVerifyJwtToken(
        req.headers.authorization.split(' ')[1]
      );
      return user;
    }
    return null;
  };
  const user = await getUserFromHeader();

  return {
    user,
  };
};
export type Context = Awaited<ReturnType<typeof createContext>>;
