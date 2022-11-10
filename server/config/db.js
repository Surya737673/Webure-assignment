const mongoose=require("mongoose");


const db=process.env.MongoURL;

const connection=async()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("connected to database");
    }catch(err){
        console.log(err.message);
    }
};

module.exports=connection;