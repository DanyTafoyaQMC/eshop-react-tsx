export interface CartItem {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

export interface Items {
    items:CartItem[];
}

export interface ShoppingCart {
    items : CartItem[];
    total: number;
}