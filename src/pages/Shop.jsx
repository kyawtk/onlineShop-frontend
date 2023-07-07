import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { Link, useSearchParams } from "react-router-dom";
import "./Shop.scss";
import useFetch from "../hooks/useFetch";
const Shop = () => {
  // const [products,loading] = useContext(ShopContext)
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const products = useFetch(url);
  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);
  return (
    <div className="shop">
      {loading && <h1>Loading</h1>}
      <Sidebar setUrl={setUrl} setLoading={setLoading}> </Sidebar>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;

function Sidebar({ setUrl ,setLoading}) {
  const categories = useFetch("https://fakestoreapi.com/products/categories");
  return (
    <div className="sidebar">
      <ul>
        {categories.map((category) => {
          return (
            <li
              key={category}
              onClick={() => {
                setUrl(
                  `https://fakestoreapi.com/products/category/${category}`
                );
                setLoading(true)
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export function ProductCard({ product }) {
  const { id, title, image, price, rating } = product;

  return (
    <Link to={`/shop/${id}`}>
      <div className="productCard">
        <div className="card-img">
          <img src={image} alt={title} />
        </div>
        <div className="card-info">
          <h2>{title}</h2>
          <p>{price * 3000} Kyats</p>
        </div>
      </div>{" "}
    </Link>
  );
}
