import React from 'react';
import { decode } from 'he';
import { OfferOverview } from '@types';
import { List } from '@components';
import './OfferList.css';

interface OfferListProps {
  offers: OfferOverview[];
}

const OfferList: React.FC<OfferListProps> = ({ offers }) => {
  return (
    <List<OfferOverview>
      data={offers}
      testId="offers-list"
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
                ? `${decode(offer.offer.currency_symbol)}${offer.offer.price} ${offer.offer.currency_iso}`
                : 'Price Not Available'}
            </p>
            <button
              className="offer-link"
              onClick={() => window.open(offer.offer.link, '_blank')}
              aria-label={`View offer on ${offer.merchant.name || 'Merchant link'}`}
            >
              View offer on {offer.merchant.name || 'Merchant'}
            </button>
          </div>
          <div className="merchant-section">
            {offer.merchant.logo_url ? (
              <img
                src={offer.merchant.logo_url}
                alt={`${offer.merchant.name} Logo`}
                className="merchant-logo"
              />
            ) : (
              <div className="no-logo">No Logo</div>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default OfferList;
