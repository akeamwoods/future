import { screen } from '@testing-library/react';
import Table, { Column } from './Table';
import { RenderWithProvider } from '@test';
import { mockOffers } from '@test';

const columns: Column<(typeof mockOffers)[0]>[] = [
  { key: 'name', label: 'Product Name', render: (row) => row.offer.name },
  {
    key: 'price',
    label: 'Price',
    render: (row) =>
      `${row.offer.currency_symbol}${row.offer.price} ${row.offer.currency_iso}`,
  },
  { key: 'merchant', label: 'Merchant', render: (row) => row.merchant.name },
];

describe('Table Component Tests', () => {
  test('renders table and headers correctly', async () => {
    RenderWithProvider(
      <Table data={mockOffers} columns={columns} testId="test-table" />,
    );

    const table = screen.getByTestId('test-table');
    expect(table).toBeInTheDocument();

    columns.forEach((column) => {
      const header = screen.getByTestId(`test-table-header-${column.key}`);
      expect(header).toBeVisible();
      expect(header).toHaveTextContent(column.label);
    });
  });

  test('renders rows and cell content correctly', async () => {
    RenderWithProvider(
      <Table data={mockOffers} columns={columns} testId="test-table" />,
    );

    mockOffers.forEach((row, rowIndex) => {
      expect(
        screen.getByTestId(`test-table-row-${rowIndex}`),
      ).toBeInTheDocument();

      columns.forEach((column) => {
        const cell = screen.getByTestId(
          `test-table-cell-${column.key}-${rowIndex}`,
        );
        const cellValue = column.render(row)?.toString() || '';
        expect(cell).toHaveTextContent(cellValue);
      });
    });
  });

  test('renders empty state when no data is provided', async () => {
    RenderWithProvider(
      <Table data={[]} columns={columns} testId="test-table" />,
    );

    expect(screen.queryByTestId('test-table-row-0')).not.toBeInTheDocument();
  });
});
