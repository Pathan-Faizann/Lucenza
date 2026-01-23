import express from "express"
import { AddtoCart } from "../controllers/CartController";

const CartRouter = express.Router();

CartRouter.post("/addMyCart",AddtoCart)

export default CartRouter;