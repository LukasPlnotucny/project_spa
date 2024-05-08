export interface Item {
    id: number;
    name: string;
    price: number;
    vat: number;
    quantity?: number
}

export interface ItemFormInterface {
    name: string;
    price: number;
    vat: number;
    quantity?: number;
}

export interface ItemOrder {
    id: number;
    name: string;
    price: number;
    vat: number;
    quantity: number
}