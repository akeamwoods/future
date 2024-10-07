import React from 'react';
import { OfferOverview } from '../types';
import { List } from '../components';
import './OfferList.css';

interface OfferCardListProps {
  offers: OfferOverview[];
}

const OfferCardList: React.FC<OfferCardListProps> = ({ offers }) => {
  return (
    <List
      data={offers}
      renderItem={(offer) => (
        <div className="offer-card">
          <div className="offer-image-container">
            {offer.image ? (
              <img
                src={offer.image}
                alt={`Image of ${offer.offer.name}`}
                className="offer-image"
              />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
          </div>
          <div className="offer-details">
            <h2 className="offer-title">
              {offer.offer.name || 'No Name Available'}
            </h2>
            <p className="offer-price">
              {offer.offer.price
                ? `${offer.offer.currency_symbol}${offer.offer.price} ${offer.offer.currency_iso}`
                : 'Price Not Available'}
            </p>
            <div className="flex items-center mb-4">
              {offer.merchant.logo_url ? (
                <img
                  src={offer.merchant.logo_url}
                  alt={`${offer.merchant.name} Logo`}
                  className="merchant-logo"
                />
              ) : (
                <div className="no-logo">No Logo</div>
              )}
              <span className="merchant-name">
                {offer.merchant.name || 'Unknown Merchant'}
              </span>
            </div>
            <div className="mt-auto">
              {offer.offer.link ? (
                <a
                  href={offer.offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="offer-link"
                >
                  View Offer
                </a>
              ) : (
                <span className="text-gray-500">No Link Available</span>
              )}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default OfferCardList;
