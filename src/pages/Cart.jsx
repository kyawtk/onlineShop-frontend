import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import "./Cart.scss";
const Cart = () => {
  const { items, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  let total = 0;
  items.forEach((item) => (total = total + item.quantity * item.price *3000));


  const jsonFileDownload = () => {
    const json_data = items;
    const fileName = "yourShoppingBag.json";
    const data = new Blob([JSON.stringify(json_data)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(data);
    
   
    
    return jsonURL;
  };


  return (
    <div className="cart">
      

      
      <div className="items">
        {items.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>;
      })}
      </div>
      <div className="sidebar checkout">
        <table>
          <tr>
            <th>Total</th>
            <td>{total}</td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>Free</td>
          </tr>
          <tr><th>Final Total</th>
          <td>{total}</td></tr>
          
        </table>
        <a className="checkout-btn" href={jsonFileDownload()} download={'yourShoppingBag.json'}>Checkout</a>
      </div>
    </div>
  );
};

export default Cart;

function CartItem({ title, image, id, quantity, price }) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <>
      <div className="cartItem">
        <div className="cart-img">
          <img src={image} alt={title} />
        </div>
        <div className="cart-info">
          <h2>
            {title}
          </h2>
          <b>{price*3000} Kyats</b>
          <span>
            <FaMinusSquare
              onClick={() => {
                decreaseQuantity(id);
              }}
            />
            {quantity} <FaPlusSquare onClick={() => increaseQuantity(id)} />
          </span>
          <b>Total : {price* quantity* 3000} kyats</b>
        </div>
       
      </div>
    </>
  );
}



