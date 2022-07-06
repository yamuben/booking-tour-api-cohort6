import { Router } from "express";
import UserController from "../controllers/userController"

const route =Router();
route.post("/user/login",UserController.loginUserController);
route.post("/user/test",UserController.testController);
route.post("/user/create",UserController.registerUser);


export default route;