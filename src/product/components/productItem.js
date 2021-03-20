import {useState} from 'react';

export const ProductItem = ({ id, name, description, price, onAddToCartClick }) => {

  const [showAdded, setShowAdded] = useState(true);

  const handleOnClick = () => {
    onAddToCartClick({id:id, name:name,description:description,price:price});
    setShowAdded(false);
    setTimeout(function () {
      setShowAdded(true);
  }, 2000);
  }

  return (
    <div key={id} className='card card-body'>
      <img className="product-img" src={"/" + id + ".png"} />
      <div className="mt-2">{name}</div>
      <p>${price}</p>
      <p>
        <div onClick={handleOnClick}><img className="add-to-cart-icon" src="/cart.png"/> <div hidden={showAdded} className="inline-block">ADDED</div></div>
      </p>
    </div>
  );
}
