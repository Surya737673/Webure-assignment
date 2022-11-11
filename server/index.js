const express=require("express");
require("dotenv").config();


const cors=require("cors");
const connectDb=require("./config/db"); 
const authRouter = require("./routes/auth");

const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const session = require("express-session")
const cookieParser = require('cookie-parser')


const app= express();

connectDb();



//middlewares
app.use(express.json({extended:false}));
app.use(express());
app.use(cors({
    origin:true,
    credentials:true
}));

app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  require("./middleware/passport")(passport);






app.use("/auth",authRouter)


const PORT=process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})