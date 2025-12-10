import { QueryClientConfig } from '@tanstack/react-query';

export const queryOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 60 * 1000,
      gcTime: 60 * 1000,
    },
  },
};
