import { screen, waitFor, fireEvent, act } from '@testing-library/react';
import { mockOffers, RenderWithProvider } from '@test';
import { fetchOffers } from '@api';
import App from './App';

jest.mock('@api', () => ({
  fetchOffers: jest.fn(),
}));

describe('App tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    (fetchOffers as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) => setTimeout(() => resolve(mockOffers), 500)),
    );
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  test('renders loading skeleton then renders table with data', async () => {
    RenderWithProvider(<App />);

    // Assert that the loading skeleton is displayed initially
    expect(screen.getByTestId('skeleton-table')).toBeInTheDocument();

    // advance time by 500ms to resolve fetchOffers mock
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // wait for skeleton to disappear and table to be rendered
    await waitFor(() =>
      expect(screen.queryByTestId('skeleton-table')).not.toBeInTheDocument(),
    );

    // assert that table and content are rendered
    expect(screen.getByTestId('offers-table')).toBeInTheDocument();
    expect(screen.getByTestId('offers-table-header')).toBeInTheDocument();
    expect(screen.getByTestId('offers-table-body')).toBeInTheDocument();
    expect(
      screen.getByTestId('offers-table-cell-offerName-0'),
    ).toHaveTextContent('Product 1');
  });

  test('toggles between table and list view and back to table', async () => {
    await act(async () => {
      RenderWithProvider(<App />);
    });

    // wait for the table to be rendered
    await waitFor(() =>
      expect(screen.getByTestId('offers-table')).toBeInTheDocument(),
    );

    const toggleButton = screen.getByRole('button', { name: /toggle/i });

    // toggle to list view
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    // assert list view is rendered
    await waitFor(() => {
      expect(screen.queryByTestId('offers-table')).not.toBeInTheDocument();
      expect(screen.getByTestId('offers-list-container')).toBeInTheDocument();
    });

    // toggle back to table view
    await act(async () => {
      fireEvent.click(toggleButton);
    });

    // ssert table view is back in view
    await waitFor(() => {
      expect(
        screen.queryByTestId('offers-list-container'),
      ).not.toBeInTheDocument();
      expect(screen.getByTestId('offers-table')).toBeInTheDocument();
    });
  });
});
