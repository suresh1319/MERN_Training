import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import axios from 'axios';
import './Cart.css'
function Cart() {
  const { cart, setCart,user } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const API_URL = import.meta.env.VITE_API_URL
  const increment = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    );
  };
  const decrement = (id) => {
    setCart(
      cart.map((item) => {
        if (item._id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    );
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0),
    );
  }, [cart]);

  const placeOrder = async () => {
    if(user.email===undefined){
        alert("Please login to place order");
        return;
    }
    const orderDetails = {
        email: user.email,
        value:orderValue,
        items:cart,
    }
    console.log(orderDetails)
    const url = API_URL+"/orders/create";
    const response = await axios.post(url,orderDetails);
    setCart([]);
  };

  return (
    <div>
      <h1>My Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item._id} id="cartProduct">
            {item.name}-{item.price}-
            <button onClick={() => decrement(item._id)}>-</button>
            {item.quantity}
            <button onClick={() => increment(item._id)}>+</button>-
            {item.quantity * item.price}
          </li>
        ))}
      </ul>
      <p>
        <strong>Order Value:{orderValue}</strong>
      </p>
      <p>
        <button onClick={placeOrder}>Place Order</button>
      </p>
    </div>
  );
}
export default Cart;