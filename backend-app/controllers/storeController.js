import productModel from "../models/productModel.js";

const showProducts =  async (req,res) => {
    const products = await productModel.find()
    res.json(products)
}

export {showProducts}