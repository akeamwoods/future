import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@api';

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
