const express=require("express");
const router=express.Router()
const User=require("../model/userSchema")
const Person=require("../model/schema");
const per=require('../model/schema')
const cors=require('cors');
const { set } = require("mongoose");
require("../db/conn")
const app=express()
app.use(express.json())
app.use(cors());

router.get('/',function(req,res){
    res.send("Hello World AT Router");
   
})

router.post('/register',async(req,res) =>{ 
    //to Insert Values
    const {name,AadhaarNumber,LiscenceNumber, ChassisNumber,InsuranceNumber,PhoneNumber, VehicleType,Model,VehicleNumber,Challan}=req.body;
    
    if(!name || !ChassisNumber ||  !VehicleType || !VehicleNumber || !AadhaarNumber || !InsuranceNumber){ //if required feild is not filled
        return res.status(422).json({error:"Feild not Filled Properly"})
    }

    try {
        const userExist = await User.findOne({ VehicleNumber: VehicleNumber });


        if (userExist) {
            if (userExist) {
                return res.status(422).json({ error: "Vehicle already exist" });
            }
        }
        const user = new User({ChassisNumber,InsuranceNumber,VehicleType,Model,VehicleNumber,Challan});
        await user.save();
        const person=new per({name,PhoneNumber,AadhaarNumber,VehicleNumber,LiscenceNumber})
        await person.save();
        res.json({ vehicle: userExist, person: personExist }); 
        //.res.status(201).json({ message: "User succesfully registered" });

    } catch (error) {
        console.log(error);
    }
})

router.post('/search',async(req,res) =>{ 

    res.setHeader('Content-Type', 'application/json')
    const {VehicleNumber}=req.body;
   // console.log(VehicleNumber);
    // var str=VehicleNumber[VehicleNumber];
    // console.log(str)
       try {
        const userExist = await User.findOne({VehicleNumber:VehicleNumber});
        const personExist=await Person.findOne({VehicleNumber:VehicleNumber});
        if (userExist && personExist) {
            
            console.log("Vehicle Details are");
            console.log(userExist);
            console.log("Person Details are");
            console.log(personExist);
            res.json({ vehicle: userExist, person: personExist }); 
            // Send the data as a JSON response
          } else {
            res.status(404).json({ error: "No matching vehicle found" });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Internal server error" });
        }
})

router.post('/update',async(req,res) =>{ 

    const {VehicleNumber,Challan}=req.body;
    //console.log(req.body.Challan+" "+req.body.VehicleNumber)
   // console.log(VehicleNumber+" "+Challan);
    // var str=VehicleNumber[VehicleNumber];
    // console.log(str)
       try {
        const userExist = await User.findOne({VehicleNumber:VehicleNumber})
        //const pers=await Person.findOne({VehicleNumber:VehicleNumber})
        if(userExist){
            
            const result=await User.updateOne({VehicleNumber:VehicleNumber},{
                $set:{
                    //Challan:Challan
                    Challan:Challan
                }
            })
            console.log("UPDATED VALUE IS")
            //console.log(result);
            const userExist = await User.findOne({VehicleNumber:VehicleNumber})
            console.log(userExist)
        }
        else{
            console.log("Error");
        }

    } catch (error) {
        console.log(error);
    }
})

router.post('/delete',async(req,res) =>{ 

    const {VehicleNumber}=req.body;
    console.log(VehicleNumber);
    // var str=VehicleNumber[VehicleNumber];
    // console.log(str)
       try {
        const userExist = await User.findOne({VehicleNumber:VehicleNumber});
       // const pers=await Person.findOne({VehicleNumber:VehicleNumber})
        if(userExist){
           // console.log(userExist)
            console.log("DELETED");
            const ans=await Person.deleteOne({VehicleNumber})
            const result= await User.deleteOne({VehicleNumber})
            console.log(ans);
            console.log(result);
        }
        else{
            console.log("Error");
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports=router;





// db.movies.updateOne( { title: "Tag" },
// {
//   $set: {
//     plot: "One month every year, five highly competitive friends
//            hit the ground running for a no-holds-barred game of tag"
//   }
//   { $currentDate: { lastUpdated: true } }
// })