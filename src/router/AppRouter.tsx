import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartPage, EshopMain, ProductPage } from "../eshop/pages"
import { CartProvider } from "../eshop/cart/context/CartProvider"
import { NavBar } from "../shared"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <div className="container">
        <Routes>
              <Route path="/" element={<EshopMain />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="product/:productId" element={<ProductPage />} />

              <Route path="*" element={<EshopMain />} />

          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
