import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { TestProvider } from './TestProvider';

export const RenderWithProvider = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: TestProvider, ...options });
