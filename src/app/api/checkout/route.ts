import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CURRENCY, MAX_QUANTITY, getProduct } from '@/lib/products';

type AllowedCountry = Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry;

// Site languages; Stripe Checkout opens in the same language
const CHECKOUT_LOCALES: Stripe.Checkout.SessionCreateParams.Locale[] = ['tr', 'en', 'nl', 'de', 'fr', 'es', 'it'];

// EU member states + Türkiye
const SHIPPING_COUNTRIES: AllowedCountry[] = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
    'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'TR',
];

type CheckoutRequest = {
    items?: { id?: unknown; quantity?: unknown }[];
    locale?: unknown;
};

export async function POST(request: Request) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
        return NextResponse.json({ error: 'Checkout is not configured' }, { status: 503 });
    }

    let body: CheckoutRequest;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const origin = new URL(request.url).origin;
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    // Prices always come from the catalog, never from the request
    for (const item of Array.isArray(body.items) ? body.items.slice(0, 20) : []) {
        const product = typeof item?.id === 'string' ? getProduct(item.id) : undefined;
        const quantity = Number(item?.quantity);
        if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
            return NextResponse.json({ error: 'Invalid cart' }, { status: 400 });
        }
        lineItems.push({
            quantity,
            price_data: {
                currency: CURRENCY,
                unit_amount: product.unitAmount,
                product_data: {
                    name: product.name,
                    description: product.weight,
                    images: [new URL(product.images[0], origin).toString()],
                },
            },
        });
    }

    if (lineItems.length === 0) {
        return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Shipping rates are created in the Stripe Dashboard and listed here as comma-separated IDs (shr_...)
    const shippingRates = (process.env.STRIPE_SHIPPING_RATE_IDS ?? '')
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);

    try {
        const stripe = new Stripe(secretKey);
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            locale: CHECKOUT_LOCALES.find((code) => code === body.locale) ?? 'auto',
            shipping_address_collection: { allowed_countries: SHIPPING_COUNTRIES },
            ...(shippingRates.length > 0 && { shipping_options: shippingRates.map((id) => ({ shipping_rate: id })) }),
            phone_number_collection: { enabled: true },
            success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/#products`,
        });
        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error('Stripe checkout session could not be created', error);
        return NextResponse.json({ error: 'Checkout failed' }, { status: 502 });
    }
}
