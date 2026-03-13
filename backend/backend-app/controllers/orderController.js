import orderModel from "../models/orderModel.js";

const addOrder = async (req, res) => {
  const { email, value, items } = req.body;
  console.log(req.body);
  try {
    const order = await orderModel.create({
      email,
      value,
      items,
      status: "Successful"
    });
    console.log(order)
    res.status(201).json({
      message: "Order Placed Successfully",
      order
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to place order"
    });
  }
};

const getAllOrders = async (req, res)=>{
    const orders = await orderModel.find();
    res.json(orders);
}

export {addOrder,getAllOrders} 