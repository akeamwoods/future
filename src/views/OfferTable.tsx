import React from 'react';
import { decode } from 'he';
import { OfferOverview } from '@types';
import { Column, Table } from '@components';

const columns: Column<OfferOverview>[] = [
  {
    key: 'image',
    label: 'Image',
    render: (row) =>
      row.image ? (
        <img
          src={row.image}
          alt={`Image of ${row.offer.name}`}
          className="w-16 h-16 object-contain"
        />
      ) : (
        'No Image Available'
      ),
  },
  {
    key: 'offerName',
    label: 'Offer Name',
    render: (row) => row.offer.name,
    getTitle: (row) => row.offer.name,
  },
  {
    key: 'price',
    label: 'Price',
    render: (row) =>
      `${decode(row.offer.currency_symbol)}${row.offer.price ?? ''} ${row.offer.currency_iso}`,
  },
  {
    key: 'link',
    label: 'Link',
    render: (row) =>
      row.offer.link ? (
        <a
          href={row.offer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Offer
        </a>
      ) : (
        'No Link Available'
      ),
  },
  {
    key: 'merchantName',
    label: 'Merchant',
    render: (row) => row.merchant.name || 'Unknown Merchant',
  },
  {
    key: 'merchantLogo',
    label: 'Merchant Logo',
    render: (row) =>
      row.merchant.logo_url ? (
        <img
          src={row.merchant.logo_url}
          alt={`${row.merchant.name} Logo`}
          className="w-12 h-12 object-contain"
        />
      ) : (
        'No Logo Available'
      ),
  },
];

interface OfferTableProps {
  data: OfferOverview[];
}

const OfferTable: React.FC<OfferTableProps> = ({ data }) => {
  return <Table data={data} columns={columns} />;
};

export default OfferTable;
