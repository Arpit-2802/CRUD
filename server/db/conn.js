var mongoose = require('mongoose');
const conn = async(req,res,next)=>{
  try{
    await mongoose.connect("mongodb+srv://arpitthakur2802:NEZrXgeT5KlAdNAE@cluster0.3tnxkki.mongodb.net/Details")
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

