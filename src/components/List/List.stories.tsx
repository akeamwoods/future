import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import List from './List';

interface MockListItemType {
  id: number;
  name: string;
  description: string;
  image?: string;
}

const generateMockData = (count: number): MockListItemType[] => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  }));
};

const meta: Meta<typeof List<MockListItemType>> = {
  title: 'Generic/List',
  component: List<MockListItemType>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: generateMockData(5),
    renderItem: (item: MockListItemType) => (
      <div className="p-4 border-b border-gray-300">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    data: [],
    renderItem: (item: MockListItemType) => <div>{item.name}</div>,
  },
};

export const Interactive: Story = {
  args: {
    data: generateMockData(5),
    renderItem: (item: MockListItemType) => (
      <div
        className="p-4 border-b border-gray-300 transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer"
        onClick={() => alert(`Clicked on ${item.name}`)}
      >
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    ),
  },
};

export const WithImages: Story = {
  args: {
    data: generateMockData(5).map((item) => ({
      ...item,
      image: faker.image.url(),
    })),
    renderItem: (item: MockListItemType) => (
      <div className="flex items-center p-4 border-b border-gray-300">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover mr-4 rounded-lg"
          />
        )}
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
    ),
  },
};

export const LargeDataset: Story = {
  args: {
    data: generateMockData(100),
    renderItem: (item: MockListItemType) => (
      <div className="p-4 border-b border-gray-300">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    ),
  },
};
