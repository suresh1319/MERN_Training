import { useState, useEffect,useContext } from "react";
import "./Content.css";
import { AppContext } from "../App";
const API_URL = import.meta.env.VITE_API_URL;

function Content() {
  const [products, setProducts] = useState([]);
  const {cart,setCart,user,setUser} = useContext(AppContext);
  async function fetchProducts() {
    try {
      const URL = `${API_URL}/store`
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const found = cart.find((item) => item._id === product._id);
    if (!found) {
      product.quantity = 1;
      setCart([...cart,product]);
    }
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product._id} className="box">
          <img src={`${API_URL}/${product.imageUrl}`} width="300px" alt="product" />
          <p>{product.name}</p>
          <p>{product.desc}</p>
          <p>₹{product.price}</p>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Content;