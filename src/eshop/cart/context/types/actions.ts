import { CartItem } from "../../../../interfaces/Shopp_Interfaces";

export type CartAction = 
| { type: 'ADD_TO_CART'; payload: CartItem }
| { type: 'REMOVE_FROM_CART'; payload: number }
| { type: 'ADD_QUANTITY'; payload: number }
| { type: 'SUBSTRACT_QUANTITY'; payload: number };