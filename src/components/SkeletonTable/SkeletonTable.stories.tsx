import type { Meta, StoryObj } from '@storybook/react';
import SkeletonTable from './SkeletonTable';
import { Column } from '@components';

interface MockDataType {
  id: number;
  name: string;
  price: string;
  merchant: string;
}

const customColumns: Column<MockDataType>[] = [
  { key: 'id', label: 'ID', render: (row: MockDataType) => row.id },
  { key: 'name', label: 'Name', render: (row: MockDataType) => row.name },
  { key: 'price', label: 'Price', render: (row: MockDataType) => row.price },
  {
    key: 'merchant',
    label: 'Merchant',
    render: (row: MockDataType) => row.merchant,
  },
];

const meta: Meta<typeof SkeletonTable<MockDataType>> = {
  title: 'Components/SkeletonTable',
  component: SkeletonTable as typeof SkeletonTable<MockDataType>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SkeletonTable<MockDataType>>;

export const Primary: Story = {
  args: {
    columns: customColumns,
    numRows: 4,
  },
};
