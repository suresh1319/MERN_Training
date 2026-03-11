import { useState, useEffect } from "react";
import axios from "axios";
import "./Content.css";

const API_URL = import.meta.env.VITE_API_URL;

function Content() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const URL = `${API_URL}/store`
      const response = await axios.get(URL);
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product._id} className="box">
          <img src={`${API_URL}/${product.imageUrl}`} width="300px" alt="product" />
          <p>{product.name}</p>
          <p>{product.desc}</p>
          <p>₹{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Content;