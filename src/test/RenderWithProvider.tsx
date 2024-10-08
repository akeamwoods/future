import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClientWrapper } from './QueryClientWrapper';

export const RenderWithProvider = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(ui, {
    wrapper: QueryClientWrapper,
    ...options,
  });
};
