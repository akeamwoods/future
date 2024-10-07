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
}

const Table = <T extends object>({
  data,
  columns,
  isStackedOnSmallScreens = true,
}: TableProps<T>) => (
  <div
    className={`table-container ${isStackedOnSmallScreens ? 'stack-on-small' : ''}`}
  >
    <table className="table">
      <caption className="sr-only">Product Offers</caption>
      <thead className="table-header">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="table-header-cell" scope="col">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="table-row">
            {columns.map((column) => (
              <td
                key={column.key}
                className="table-cell"
                data-label={column.label}
                title={column.getTitle ? column.getTitle(row) : ''}
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
