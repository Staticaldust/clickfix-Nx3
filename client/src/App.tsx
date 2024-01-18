import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './utils/trpc';
import { BrowserRouter } from 'react-router-dom';
import RouterDom from './router/RouterDom';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Pgl } from './components/Pgraphile';
import { client } from './utils/postgraphile';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  // const [trpcClient] = useState(() =>
  //   trpc.createClient({
  //     links: [
  //       httpBatchLink({
  //         url: 'http://localhost:2022',
  //       }),
  //     ],
  //   })
  // );
  console.log('log from app component', localStorage.getItem('doesExist'));

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouterDom />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
