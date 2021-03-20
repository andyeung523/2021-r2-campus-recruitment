import '../style/cartStyle.css'

export const CartItem = ({ product }) => {

  return (
    <div key={product.id} className='row py-2'>
      <div className="col-sm-2 p-2 mr-4">
        <img className="cart-product-img" src={"/" + product.id + ".png"} />
      </div>
      <div className="col-sm-5 p-2">
        <h4>{product.name}</h4>
        <p>${product.price}</p>
      </div>
      <div className="col-sm-4 p-2 text-center ">
        <p>X {product.quantity ? product.quantity : 1}</p>
      </div>
    </div>
  );
}