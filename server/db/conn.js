var mongoose = require('mongoose');
const conn = async(req,res,next)=>{
  try{
    await mongoose.connect("")
    .then(()=>{
      console.log("Connected");
    });
  }
  catch(error){
    //res.status(400).json({message:"Not connected"});
    console.log(error);
  }
};
conn();

