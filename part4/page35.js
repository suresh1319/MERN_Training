const express = require("express");
const app = express();
const productRouter = express.Router();
const userRouter = express.Router();

productRouter.get('/list',(req,res)=>{
    res.send("Products Page")
})

userRouter.get('/list',(req,res)=>{
    res.send('Users page');
})

app.use('/products',productRouter);
app.use('/users',userRouter)

app.listen(8000, ()=>{
    console.log('Server is running');
})