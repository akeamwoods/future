import React from 'react';
import './List.css';

interface ListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T extends object>({ data, renderItem }: ListProps<T>) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <ul className="list-container">
      {data.map((item, index) => (
        <li key={index} className="list-item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
