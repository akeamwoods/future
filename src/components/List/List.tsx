import React from 'react';
import './List.css';

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  testId?: string;
}

const List = <T extends object>({
  data,
  renderItem,
  testId = 'list',
}: ListProps<T>) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <ul className="list-container" data-testid={`${testId}-container`}>
      {data.map((item, index) => (
        <li
          key={index}
          className="list-item"
          data-testid={`${testId}-item-${index}`}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
