const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },
    PhoneNumber:{
        type:Number,
        min:1000000000,
        max:9999999999,
        Required:true
    },
    AadhaarNumber:{
        type:Number,
        min:100000000000,
        max:999999999999,
        Required:true
    },
    VehicleNumber:{
        type: String,
        Required: true,
        minLength: 10,
        maxLength: 10,
        pattern: "^[A-Z|a-z]{2}[0-9]{2}[A-Z|a-z]{2}[0-9]{4}$",
    },
    LiscenceNumber: {
        type: Number,
        //minLength: 11,
        min: 10000000000,
        max: 99999999999,
        Required: false,
      },
});

const User = mongoose.model("PERSON", schema);

module.exports = User;
