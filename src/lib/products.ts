// Product catalog shared by the storefront and the checkout API.
// Prices live here (in cents) so the server never trusts a price sent from the browser.
export type Product = {
    id: string;
    name: string;
    unitAmount: number;
    weight: string;
    images: string[];
};

export const CURRENCY = 'eur';
export const MAX_QUANTITY = 10;

export const QUIET_RITUAL: Product = {
    id: 'quiet-ritual',
    name: 'Quiet Ritual',
    unitAmount: 695,
    weight: '150 g',
    images: [
        '/assets/quiet-ritual-1.jpg',
        '/assets/quiet-ritual-2.jpg',
        '/assets/quiet-ritual-3.jpg',
        '/assets/quiet-ritual-4.jpg',
        '/assets/quiet-ritual-5.jpg',
    ],
};

export const PRODUCTS: Product[] = [QUIET_RITUAL];

export const getProduct = (id: string) => PRODUCTS.find((product) => product.id === id);
