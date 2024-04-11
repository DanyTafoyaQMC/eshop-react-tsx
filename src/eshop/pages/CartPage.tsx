import { useEffect } from "react";
import { CartItem } from "../../interfaces/Shopp_Interfaces"
import { CartItemComponent, EmptyCart } from "../cart/components"
import { useCartActions } from "../cart/hooks/useCart"


export const CartPage = () => {

  const { cart } = useCartActions();

  useEffect(() => {
    console.log(cart)
  }, [])

  // Filtrar elementos duplicados del carrito basados en su ID
  const uniqueItems = cart.items.filter((item: CartItem, index: number, self: CartItem[]) =>
    index === self.findIndex((t) => (
      t.id === item.id
    ))
  );

  return (
    <>
      <h2>Cart Page</h2>

      { 
        uniqueItems.length
        ? ( uniqueItems.map((item: CartItem) => (
          <CartItemComponent key={ item.id } item={ item } />
        )))
        : ( <EmptyCart /> )
      }
    
    </>
  )
}
