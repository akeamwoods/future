import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const QueryClientWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const testQueryClient = new QueryClient();
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
