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
  const [isTableView, setIsTableView] = useState(true);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching offers</p>;

  return (
    <div className="mx-auto max-w-7xl p-5">
      <header className="flex items-center justify-between mb-8">
        <img src="/future.svg" alt="Background Curve" className="h-16 w-auto" />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg shadow-lg transition duration-200"
          onClick={() => setIsTableView(!isTableView)}
        >
          Toggle {isTableView ? 'Card' : 'Table'} View
        </button>
      </header>

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
