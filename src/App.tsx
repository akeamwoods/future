import { Suspense, useState } from 'react';
import { useOffers } from './hooks/useOffers';
import React from 'react';

// Code splitting/lazy loading for better performance
const OfferList = React.lazy(() =>
  import('./views').then((module) => ({ default: module.OfferList })),
);
const OfferTable = React.lazy(() =>
  import('./views').then((module) => ({ default: module.OfferTable })),
);

function App() {
  const { data: offers, isLoading, isError } = useOffers();
  const [isTableView, setIsTableView] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching offers</p>;

  return (
    <div style={{ margin: '0 auto', maxWidth: '1080px' }}>
      <h1>Offers</h1>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsTableView(!isTableView)}
      >
        Toggle {isTableView ? 'Card' : 'Table'} View
      </button>

      <Suspense fallback={<p>Loading view...</p>}>
        {isTableView ? (
          <OfferTable data={offers ?? []} />
        ) : (
          <OfferList offers={offers ?? []} />
        )}
      </Suspense>
    </div>
  );
}

export default App;
