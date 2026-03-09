
import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";  
// import {productRouter} from "./routes/productRoute.js";
import { storeRouter } from "./routes/storeRoute.js";
import dbConnect from "./config/db.js";


dotenv.config();
const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
// app.use("/product" productRouter)
// app.use("/users", userRouter);

const startServer = async () => {
  await dbConnect().then(
    console.log("Database connected successfully")).catch(
    (err)=>console.log(err))
  app.listen(5000, () => {
  console.log("Server is running on the port http://localhost:5000");
});
}
startServer();