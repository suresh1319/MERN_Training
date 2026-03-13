import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: { type: String },
  value: { type: String},
  items: { type: Array},
  status:{ type: String,default:"pending"}
});
const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;
