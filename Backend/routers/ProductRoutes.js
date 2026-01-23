import express, { Router } from "express";
import { addProduct ,getProducts,deleteProduct, updateProduct, FetchOne} from "../controllers/productController.js";
import { isLogin } from "../middleware/isAuth.js";

const Prorouter = express.Router()

Prorouter.post("/addProduct",addProduct);
Prorouter.get("/getProducts",getProducts);
Prorouter.delete("/deleteProducts/:id",deleteProduct);
Prorouter.put("/updateProducts/:id",updateProduct);
Prorouter.get("/product/:id",FetchOne)
// Prorouter.get("/view",isLogin)


export default Prorouter;