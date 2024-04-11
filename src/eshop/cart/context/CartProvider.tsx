import { useReducer } from "react"
import { CartContext } from "./CartContext"
import { cartReducer } from "./cartReducer"
import { ShoppingCart } from "../../../interfaces/Shopp_Interfaces";

const initialState:ShoppingCart = {
    items: [],
    total: 0
};
export const CartProvider = ({ children }) => {
    const [ cart, dispatch ] = useReducer( cartReducer, initialState );
  return (
    <CartContext.Provider value = {{ cart, dispatch }}>
        { children }
    </CartContext.Provider>
  );
};
