import { Column } from '@components';

interface SkeletonTableProps<T> {
  columns: Column<T>[];
  numRows?: number;
}

const SkeletonTable = <T extends object>({
  columns,
  numRows = 4,
}: SkeletonTableProps<T>) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="table-header-cell">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="table-row animate-pulse">
              {columns.map((_column, colIndex) => (
                <td key={colIndex} className="table-cell">
                  <div className="bg-gray-300 h-6 rounded-md w-full"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
