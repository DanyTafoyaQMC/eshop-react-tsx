import { createContext } from "react";
import { ShoppingCart } from "../../../interfaces/Shopp_Interfaces";
import { CartAction } from "./types/actions";
const InitialCart: ShoppingCart ={
    items: [],
    total: 0
};

export const CartContext = createContext<{ cart:ShoppingCart; dispatch:React.Dispatch<CartAction> }>({
    cart: InitialCart,
    dispatch: () => null
});
