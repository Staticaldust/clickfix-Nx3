import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';
import { AppRouter } from '../../../server/src/main';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:2022',
      headers: () => {
        return {
          Authorization: String(localStorage.getItem('TOKEN')),
        };
      },
    }),
  ],
  // transformer: undefined,
});
