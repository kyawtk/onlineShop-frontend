import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import "./Cart.scss";
const Cart = () => {
  const { items, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  let total = 0;
  items.forEach((item) => (total = total + item.quantity * item.price));


  const jsonFileDownload = () => {
    const json_data = items;
    const fileName = "yourShoppingBag.json";
    const data = new Blob([JSON.stringify(json_data)], { type: "text/json" });
    const jsonURL = window.URL.createObjectURL(data);
    
   
    
    return jsonURL;
  };


  return (
    <div className="cart">
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <div className="td-img"><img src={item.image} alt="" /></div>
                
                <span>{item.title}</span>
              </td>
              <td>{item.price*3000} Kyats</td>
              <td>
                
                <span>
                  <FaMinusSquare
                    onClick={() => {
                      decreaseQuantity(item.id);
                    }}
                  />
                  {item.quantity}{" "}
                  <FaPlusSquare onClick={() => increaseQuantity(item.id)} />
                </span>
              </td>
              <td>
                {item.quantity* item.price *3000} Kyats
              </td>
            </tr>
          );
        })}

        <tr>
          <th colSpan={3}>Total</th>
          <td>{total*3000}</td>
        </tr>
      </table>

      <a className="checkout-btn" href={jsonFileDownload()} download={'yourShoppingBag.json'}>Checkout</a>
      {/* {items.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>;
      })} */}
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
          <p>
            {title}: {price}
          </p>
          <span>
            <FaMinusSquare
              onClick={() => {
                decreaseQuantity(id);
              }}
            />
            {quantity} <FaPlusSquare onClick={() => increaseQuantity(id)} />
          </span>
        </div>
        <div className="billing"></div>
      </div>
    </>
  );
}



