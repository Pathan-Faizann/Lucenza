import express from "express";
import router from "./routers/UserRouter.js";
import cors from "cors";
import connection from "./config/db.js";
import Prorouter from "./routers/ProductRoutes.js";
import LoginRoute from "./routers/LoginRoute.js";
import session from "express-session";
import CartRouter from "./routers/CartRoutes.js";

const app = express();

const port = 3000;
app.use("/public", express.static("public"));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(session({
    secret:"lucenzabyFaizan",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true
    }
}))
app.use(express.json());

connection();

app.use("/lucenza", router);
app.use("/lucenzaProducts", Prorouter);
app.use("/lucenzaLogin", LoginRoute);
app.use("/Cart",CartRouter)

app.listen(port, () => console.log(`Server started at ${port}`));
