import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider as BaseClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryOptions } from '@shared/config/react-query';

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient(queryOptions);

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => (
  <BaseClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </BaseClientProvider>
);
