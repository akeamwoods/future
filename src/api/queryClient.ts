import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes until cache is considered stale
      gcTime: 1000 * 60 * 10, // 10 minutes until stale cache garbage collection
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});
