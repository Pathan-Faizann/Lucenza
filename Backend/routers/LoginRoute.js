import express from "express"
import { checkUser, LoggedinUser } from "../controllers/loginController.js"
import { isLogin } from "../middleware/isAuth.js"
const router = express.Router()


router.post("/Clogin",checkUser)
router.get("/fetch",isLogin,LoggedinUser)
export default router