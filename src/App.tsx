import React, { Suspense, useState } from 'react';
import { useOffers } from '@hooks';
import { SkeletonTable } from '@components';
import { Columns } from '@views';
import { getBaseUrl } from '@utils';

// Code splitting/lazy loading for better performance
const OfferList = React.lazy(() =>
  import('@views').then((module) => ({ default: module.OfferList })),
);
const OfferTable = React.lazy(() =>
  import('@views').then((module) => ({ default: module.OfferTable })),
);

function App() {
  const { data: offers, isLoading, isError } = useOffers();
  const [isTableView, setIsTableView] = useState(true);

  if (isError)
    return <p>There was an error fetching offers. Please try again later.</p>;

  return (
    <div className="mx-auto max-w-7xl p-5" role="main">
      <header className="flex items-center justify-between mb-8">
        <img
          src={`${getBaseUrl()}future.svg`}
          alt="Future Logo"
          className="h-16 w-auto"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg shadow-lg transition duration-200"
          onClick={() => setIsTableView(!isTableView)}
        >
          Toggle {isTableView ? 'Card' : 'Table'} View
        </button>
      </header>

      {isLoading ? (
        <SkeletonTable columns={Columns} numRows={4} />
      ) : (
        <Suspense fallback={<SkeletonTable columns={Columns} numRows={4} />}>
          {isTableView ? (
            <OfferTable data={offers ?? []} />
          ) : (
            <OfferList offers={offers ?? []} />
          )}
        </Suspense>
      )}
    </div>
  );
}

export default App;
