import { displayUsers,addUser,addUserForm,deleteUser,editUserForm,saveUser } from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/",displayUsers);
userRouter.get("/add",addUserForm);
userRouter.post("/add",addUser);
userRouter.get('/:id/delete', deleteUser);
userRouter.get('/:id/edit', editUserForm);
userRouter.post('/:id/save',saveUser);

export { userRouter };