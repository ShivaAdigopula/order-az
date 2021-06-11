export interface Price {
    currency: string;
    value: number;
}

export interface SalePrice {
    currency: string;
    value: number;
}

export interface ShippingPrice {
    currency: string;
    value: number;
}

export interface Shipping {
    country: string;
    price: ShippingPrice;
    region: string;
    service: string;
}

export interface ShippingWeight {
    unit: string;
    value: number;
}

export interface Tax {
    country: string;
    rate: string;
    region: string;
    taxShip: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}