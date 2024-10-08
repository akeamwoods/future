import React from 'react';
import './Table.css';

export interface Column<T> {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
  getTitle?: (row: T) => string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  isStackedOnSmallScreens?: boolean;
  testId?: string;
}

const Table = <T extends object>({
  data,
  columns,
  isStackedOnSmallScreens = true,
  testId = 'table',
}: TableProps<T>) => (
  <div
    className={`table-container ${isStackedOnSmallScreens ? 'stack-on-small' : ''}`}
    data-testid={`${testId}-container`}
  >
    <table className="table" data-testid={`${testId}`}>
      <caption className="sr-only">Product Offers</caption>
      <thead className="table-header" data-testid={`${testId}-header`}>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className="table-header-cell"
              scope="col"
              data-testid={`${testId}-header-${column.key}`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body" data-testid={`${testId}-body`}>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="table-row"
            data-testid={`${testId}-row-${rowIndex}`}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className="table-cell"
                data-label={column.label}
                title={column.getTitle ? column.getTitle(row) : ''}
                data-testid={`${testId}-cell-${column.key}-${rowIndex}`}
              >
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
