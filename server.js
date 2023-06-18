import express from "express"
const app = express();
import dotenv from "dotenv"
import morgan from "morgan"
dotenv.config()
import authRoutes from "./routes/auth.js";
import catagoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoutes.js"
import connectDB from "./config/db.js";
import cors from "cors"
// import path from "path"
connectDB();


const PORT= process.env.PORT ||8000;

// rest api

// middle
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
// app.use(express.static(path.join(__dirname,"./client/build")))

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",catagoryRoute)
app.use("/api/v1/product",productRoute)


app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})


app.listen(PORT,()=>{
    console.log("running ")
})


