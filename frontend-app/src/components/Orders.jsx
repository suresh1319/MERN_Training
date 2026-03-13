import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import "./Order.css";

function Orders() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AppContext);

  async function fetchOrder() {
    try {
      const response = await axios.get(API_URL + "/orders");
      const allOrders = response.data;

      const userOrders = allOrders.filter(
        (order) => order.email === user?.email
      );

      setOrders(userOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }

  useEffect(() => {
    if (user) {
      fetchOrder();
    }
  }, [user]);

  return (
    <div>
      <h1>My Orders</h1>

      <ul>
        {orders.map((order, index) => (
          <li id="order" key={index}>
            {order.items.map((item, i) => (
              <span key={i}>
                {item.name} - {item.price} - {item.quantity}
                <br />
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;