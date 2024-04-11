import { useState } from "react";
import ProductsApi from "../../../api/ProductsApi"
import { CartItem } from "../../../interfaces/Shopp_Interfaces"

interface ErrorState {
  message: string;
}

export const useProducts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<CartItem[]>([]);
    const [product, setProduct] = useState<CartItem | undefined>();
    const [error, setError] = useState<ErrorState | undefined>();

    const handleGetProducts = async () => {
        try {
            setIsLoading(true);
            const response = await ProductsApi.get("");
            setProducts(response.data);
            setIsLoading(false);
            setError(undefined); // Limpiar el estado de error si la solicitud tiene éxito
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setError({ message: "Error al cargar los productos. Por favor, inténtelo de nuevo más tarde." });
        }
    };

    const handleGetProduct = async (id: number) => {
        try {
            setIsLoading(true);
            const response = await ProductsApi.get(`/${id}`);
            setProduct(response.data);
            setIsLoading(false);
            setError(undefined); // Limpiar el estado de error si la solicitud tiene éxito
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setError({ message: "Error al cargar el producto. Por favor, inténtelo de nuevo más tarde." });
        }
    };

    return {
      isLoading,
      products,
      product,
      error,
      handleGetProducts,
      handleGetProduct
    };
};
