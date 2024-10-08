import { renderHook, waitFor } from '@testing-library/react';
import { mockOffers, QueryClientWrapper } from '@test';
import { fetchOffers } from '@api';
import { useOffers } from './useOffers';

jest.mock('@api', () => ({
  fetchOffers: jest.fn(),
}));

describe('useOffers Hook', () => {
  beforeEach(() => {
    (fetchOffers as jest.Mock).mockResolvedValue(mockOffers);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches offers successfully', async () => {
    const { result } = renderHook(() => useOffers(), {
      wrapper: QueryClientWrapper,
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockOffers);
  });

  test('handles error state correctly', async () => {
    (fetchOffers as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const { result } = renderHook(() => useOffers({ retry: false }), {
      wrapper: QueryClientWrapper,
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
