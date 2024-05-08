import type {Item, ItemOrder} from "@/interfaces/item";

export interface Order {
    id: number;
    number: string;
    due_date: string;
    paid_date: string;
    user_id: number;
    created_at: string;
    items?: Item[];
}

export interface CreateOrderForm {
    number?: string
    items: ItemOrder[];
}

export interface EditOrderForm {
    number: string;
    items: Item[];
}