import {
  createTRPCProxyClient,
  createTRPCReact,
  httpBatchLink,
} from '@trpc/react-query';
import type { AppRouter } from '../../../server/src/main';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:2022',
    }),
  ],
  transformer: undefined,
});
