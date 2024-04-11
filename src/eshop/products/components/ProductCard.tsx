import React from 'react';
import { CartItem } from '../../../interfaces/Shopp_Interfaces';
import { AddBtn } from './AddBtn';
import { ShowInfoBtn } from './ShowInfoBtn';

interface ProductCardProps {
  product: CartItem; // Debes especificar el tipo de la prop product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Usa los datos del producto para mostrar en el componente
  return (
    <div className='card shadow col-4 p-2 text-center' style={{ width: '18rem' }}>
        <h3 className='card-title'>{product.name}</h3>
        <div className="card-body">
        <img src={product.image} alt={product.name} className='card-img-top' />
        <div className="card-text ">
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
        <div className="card-footer mt-3 d-flex justify-content-between">
          <ShowInfoBtn id={product.id}/>
          <AddBtn product={product} />
        </div>
      </div>
    </div>
  );
};
