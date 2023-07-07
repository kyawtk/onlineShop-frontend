import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import ReactStars from "react-rating-stars-component";
import {FaShoppingCart} from 'react-icons/fa'
import "./Product.scss";
const Product = () => {
  
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();

      // set state when the data received
      setItem(data);
      console.log(data);
      setLoading(false);
    };

    getItem();
  }, [id]);

  

  return (
    <div className="product">
     

      <div className="product-img">
        <img src={item.image} alt="" />
      </div>
      <div className="product-info">
        <h1>{item.title}</h1>
        <h2>Description:</h2>
        <p>{item.description}</p>
        <ReactStars
          count={5}
          edit={false}
          size={30}
          value={4}
          color={"gray"}
          isHalf={true}
          activeColor="#ffd700"
        ></ReactStars>
        <b>{item.price * 3000} Kyats</b>
        <button onClick={() => addToCart(item)}>Add to Cart <FaShoppingCart/></button>
      </div>
    </div>
  );
};

export default Product;
