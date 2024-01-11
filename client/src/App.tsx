import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './utils/trpc';
import { BrowserRouter } from 'react-router-dom';
import RouterDom from './router/RouterDom';
import Header from './components/header/Header';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:2022',
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <RouterDom />
        </BrowserRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
