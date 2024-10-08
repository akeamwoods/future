import { useQuery } from '@tanstack/react-query';
import { fetchOffers } from '@api';
import { OfferOverview } from '@types';

export const useOffers = (options = {}) => {
  return useQuery<OfferOverview[]>({
    queryKey: ['offers'],
    queryFn: fetchOffers,
    ...options,
  });
};
