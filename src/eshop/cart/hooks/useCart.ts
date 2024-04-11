import { useContext } from 'react';
import { CartItem } from '../../../interfaces/Shopp_Interfaces';
import { CartContext } from '../context/CartContext';


export const useCartActions = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const addQuantity = (itemId: number) => {
    dispatch({ type: 'ADD_QUANTITY', payload: itemId });
  };

  const subtractQuantity = (itemId: number) => {
    dispatch({ type: 'SUBSTRACT_QUANTITY', payload: itemId });
  };

  const calculateTotal = () => {
    return cart.items.reduce((total:number, item:CartItem) => total + item.price * item.quantity, 0);
  };

  return { cart, addToCart, removeFromCart, addQuantity, subtractQuantity, calculateTotal };
};
