const express=require("express");
require("dotenv").config();
const cookieparser=require("cookie-parser");
const cors=require("cors");
const connectDb=require("./config/db"); 
const authRouter = require("./routes/auth");


const app= express();

connectDb();



//middlewares
app.use(express.json({extended:false}));
app.use(express());
app.use(cors({
    origin:true,
    credentials:true
}));
app.use(cookieparser());



app.use("/auth",authRouter)


const PORT=process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})