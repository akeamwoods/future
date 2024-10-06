import { useOffers } from './hooks/useOffers';

function App() {
  const { data: offers, isLoading, isError } = useOffers();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching offers</p>;

  return (
    <div>
      <h1>Offers</h1>
      <div>
        {offers?.map((item) => (
          <div key={item.id}>
            {item.image ? (
              <img src={item.image} alt={item.offer.name} />
            ) : (
              <div />
            )}
            <h2>{item.offer.name}</h2>
            <p>
              {`${item.offer.currency_symbol}${item.offer.price}${item.offer.currency_iso}`}
            </p>
            <a href={item.offer.link} target="_blank" rel="noopener noreferrer">
              View Offer
            </a>
            <div>
              {item.merchant.logo_url ? (
                <img src={item.merchant.logo_url} alt={item.merchant.name} />
              ) : (
                <p>no logo</p>
              )}
              <p>Merch name: {item.merchant.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
