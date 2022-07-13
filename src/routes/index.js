import { Router } from "express";
import UserController from "../controllers/userController";
import TourController from "../controllers/tourController";

const route =Router();
route.post("/user/login",UserController.loginUserController);
route.post("/user/test",UserController.testController);
route.post("/user/create",UserController.registerUser);



route.post("/tour/create",TourController.createTour);
route.get("/tours",TourController.getAllTours);
route.get("/tour/:id",TourController.getOneTour);
route.patch("/tour/:id",TourController.updateOneTour);


export default route;