import { useEffect } from "react";
import { useProducts } from "../products/hooks/useProducts";
import { Loading } from "../../shared";
import { ProductCard } from "../products/components/ProductCard";
import { CartItem } from "../../interfaces/Shopp_Interfaces";

export const EshopMain = () => {
  const { handleGetProducts, products, isLoading } = useProducts();
  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <>
      <h2 className="text-center">Eshop</h2>
      <div className="row gap-3 justify-content-center">
          {isLoading ? (
            <Loading />
          ) : (
            products.map((product:CartItem) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
      </div>
    </>
  );
};
