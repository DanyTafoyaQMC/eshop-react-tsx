import React from "react";
import { CartItem } from "../../../interfaces/Shopp_Interfaces"
import { useCartActions } from "../../cart/hooks/useCart"
import { useNavigate } from "react-router-dom";
interface AddBtnProps {
  product: CartItem
  className?: string
}
export const AddBtn: React.FC<AddBtnProps> = ({ product,className }) => {
  const navigate = useNavigate();
  const { addToCart } = useCartActions();

  const onAddProduct = (product: CartItem) => {
    addToCart( product )
    navigate( `/cart` )
  }
  return (
    <button 
      className={`btn btn-primary ${ className } }`}
      onClick={ () => onAddProduct( product ) }>
      Add to cart
    </button>
  );
};
