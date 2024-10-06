import React from 'react';
import './style.css';

export interface Column<T> {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export const Table = <T extends object>({ data, columns }: TableProps<T>) => (
  <div className="table-container">
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
              <td key={column.key} className="table-cell">
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
