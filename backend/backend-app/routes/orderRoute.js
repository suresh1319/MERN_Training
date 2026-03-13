import express from 'express'
const orderRouter = express.Router()
import { addOrder,getAllOrders } from '../controllers/orderController.js';

orderRouter.post('/create',addOrder);
orderRouter.get('/',getAllOrders);

export default orderRouter