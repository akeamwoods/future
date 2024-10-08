import React from 'react';
import { OfferOverview } from '@types';
import { Table } from '@components';
import { Columns } from './Columns';

interface OfferTableProps {
  data: OfferOverview[];
}

const OfferTable: React.FC<OfferTableProps> = ({ data }) => {
  return <Table data={data} columns={Columns} testId="offers-table" />;
};

export default OfferTable;
