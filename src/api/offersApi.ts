import { OfferOverview } from '../types';
import { get } from './baseApi';

export const fetchOffers = async (): Promise<OfferOverview[]> => {
  const params = {
    id: 'review',
    model_name: 'xbox_one',
    area: 'US',
  };

  const data = await get(params);
  return data.widget.data.offers as OfferOverview[];
};
