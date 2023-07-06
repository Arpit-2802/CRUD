// const express=require("express");
// var cors = require('cors')
// const coll= require('../model/userSchema')
// const app=express();

// app.use(express.json())
// app.use(cors());
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://thakur:arpit@cluster0.dszwqhx.mongodb.net/DBMS?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   app.listen(3000, () => {
//     console.log("connected to test");
//   });


//   app.get("/Search",async (req,res)=>{

//     const {VehicleNumber}=req.body;
//     console.log(req.body);
//     console.log(VehicleNumber);
//       //var coll=client.db('Vehicle').collection('users')
//     const userExist= await coll.findOne({VehicleNumber:VehicleNumber})
//     try {
//       const userExist = await User.findOne({VehicleNumber:VehicleNumber});
//       if(userExist){
//           console.log(userExist)
//           console.log("SEARCHED");
//          // res.send(userExist);
//           //User.deleteOne({VehicleNumber:VehicleNumber})
//       }
//       else{
//           console.log("Error");
//       }

//   } catch (error) {
//       console.log(error);
//   }
//   })
// });
