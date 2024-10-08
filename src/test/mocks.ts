import { OfferOverview } from '@types';

export const mockOffers: OfferOverview[] = [
  {
    id: 1,
    offer: {
      id: 1,
      name: 'Product 1',
      price: '100',
      currency_iso: 'USD',
      currency_symbol: '$',
      link: '#',
    },
    merchant: { id: 1, name: 'Merchant 1', logo_url: 'logo1.png' },
    image: 'image1.png',
  },
];
