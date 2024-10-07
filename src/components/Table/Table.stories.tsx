import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import Table, { Column } from './Table';

interface MockTableDataType {
  id: number;
  name: string;
  age: number;
}

const generateMockData = (count: number): MockTableDataType[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 99 }),
  }));
};

const mockData: MockTableDataType[] = generateMockData(3);

const columns: Column<MockTableDataType>[] = [
  { key: 'id', label: 'ID', render: (row) => row.id },
  { key: 'name', label: 'Name', render: (row) => row.name },
  {
    key: 'age',
    label: 'Age',
    render: (row) => <strong>{row.age}</strong>,
  },
];

const meta: Meta<typeof Table<MockTableDataType>> = {
  title: 'Components/Table',
  component: Table<MockTableDataType>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: mockData,
    columns,
  },
};

export const SingleRow: Story = {
  args: {
    data: generateMockData(1),
    columns,
  },
};

export const WithoutStackedOnSmall: Story = {
  args: {
    data: generateMockData(5),
    columns,
    isStackedOnSmallScreens: false,
  },
};

export const ConditionalAgeStyling: Story = {
  args: {
    data: generateMockData(10),
    columns: columns.map((col) => ({
      ...col,
      render:
        col.key === 'age'
          ? (row) => (
              <span style={{ color: row.age > 50 ? 'red' : 'black' }}>
                {row.age}
              </span>
            )
          : col.render,
    })),
  },
};

export const NameWithLink: Story = {
  args: {
    data: generateMockData(5),
    columns: columns.map((col) => ({
      ...col,
      render:
        col.key === 'name'
          ? (row) => (
              <a
                href={`https://example.com/users/${row.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {row.name}
              </a>
            )
          : col.render,
    })),
  },
};

export const WithEditButton: Story = {
  args: {
    data: generateMockData(5),
    columns: columns.concat({
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => alert(`Editing user ${row.name}`)}
        >
          Edit
        </button>
      ),
    }),
  },
};

export const NameWithAvatar: Story = {
  args: {
    data: generateMockData(5),
    columns: columns.map((col) => ({
      ...col,
      render:
        col.key === 'name'
          ? (row) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={faker.image.avatar()}
                  alt={row.name}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                {row.name}
              </div>
            )
          : col.render,
    })),
  },
};

export const LargeDataset: Story = {
  args: {
    data: generateMockData(50),
    columns,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
