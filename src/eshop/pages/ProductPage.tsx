import { useParams } from "react-router-dom";
import { AddBtn } from "../products/components/AddBtn";
import { useProducts } from "../products/hooks/useProducts";
import { useEffect } from "react";
import { Loading } from "../../shared";

export const ProductPage = () => {

  const { productId } = useParams();
  const { handleGetProduct, isLoading, product } = useProducts();

  useEffect(() => {
    handleGetProduct(Number(productId));

  }, [ productId ]);

  return (
    <>
      { isLoading ? (
        <Loading />
      ) : product ? (
        <div className="card mt-3">
          <div className="card-header text-center">{product.name}</div>
          <div className="card-body h-100 justify-content-center">
            <img src={product.image} alt={product.name} className="card-img-top" style={{ width: "200px" }}/>
            <h5 className="card-title">{product.description}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Price: {product.price}</li>
              <li className="list-group-item"> Quantity: {product.quantity}</li>
            </ul>
          </div>
          <div className="card-footer text-muted">
            <AddBtn product={product} className="w-100" />
          </div>
        </div>
      ) : (
        <p>No se ha encontrado el producto.</p>
      )}
    </>
  );
};
