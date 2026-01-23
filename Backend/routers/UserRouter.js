import express from "express";
import { addUser,getUsers, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/addUser",addUser)
router.get("/getusers",getUsers)
router.delete("/deleteUser/:id",deleteUser)

export default router;

