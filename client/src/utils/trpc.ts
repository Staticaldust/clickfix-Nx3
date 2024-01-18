import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';
import { AppRouter } from '../../../server/src/main';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:2022',
      async headers() {
        const token = localStorage.getItem('token');
        return {
          authorization: token ? `Bearer ${token}` : '',
        };
      },
    }),
  ],
  // transformer: undefined,
});

// export function setToken(newToken: string) {
//   token = newToken;
// }
