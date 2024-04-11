import { ShoppingCart } from "../../../interfaces/Shopp_Interfaces";
import { CartAction } from "./types/actions";

export const cartReducer = (state: ShoppingCart, action: CartAction): ShoppingCart => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
      case 'ADD_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case 'SUBSTRACT_QUANTITY':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      default:
        return state;
    }
  };