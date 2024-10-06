export interface OfferOverview {
  id: number;
  merchant: Merchant;
  offer: OfferDetails;
  image?: string;
}

export interface Merchant {
  id: number;
  name: string;
  logo_url: string;
}

export interface OfferDetails {
  id: number;
  name: string;
  currency_iso: string;
  currency_symbol: string;
  link: string;
  price?: string;
}
