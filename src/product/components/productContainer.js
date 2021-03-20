import {getProduct} from '../dao/productDao';
import { useState, useEffect } from 'react';
import '../style/productStyle.css';
import { ProductItem } from './productItem';

export const ProductContainer = ({storeAddCart}) => {
    //React useState hook is used for state management. Utilzes setter setProducts to update product state
    const [products, setProducts] = useState([]);
    
    //React useEffect hook with empty array as second argument will run below code only once 
    useEffect(() => {
        getProduct().then(res => {
          setProducts(res);
        });
    }, [])

  return (
    <>
      <div className='align-grid'>
        <div className='grid'>
          {products && products.map(product => {
            return (
              <div className="grid-item">
                <ProductItem
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  onAddToCartClick={storeAddCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )

}
