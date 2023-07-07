import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total = total + item.quantity;
    });
    setNumberOfItems(total);
    console.log(items);
  }, [items]);
  function increaseQuantity(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setItems(updatedItems);
  }

  function decreaseQuantity(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setItems(updatedItems);
  }

  function addToCart(product) {
    const productIndex = items.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // Product already exists in cart, update quantity
      const updatedItems = [...items];
      updatedItems[productIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      // Product doesn't exist in cart, add it with quantity of 1
      const updatedItems = [...items, { ...product, quantity: 1 }];
      setItems(updatedItems);
    }
  }

  return (
    <CartContext.Provider
      value={{
        numberOfItems,
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
