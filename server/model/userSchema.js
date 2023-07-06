const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ChassisNumber: {
    type: String,
    minLength: 17,
    maxLength: 17,
    Required: true,
  },
  InsuranceNumber: {
    type: Number,
    min:10000000,
    max:9999999999,
    Required: true,
  },
  VehicleType: {
    type: String,
    enum: ["MCWOG", "MCWG", "LMV", "HMV", "mcwog", "mcwg", "lmv", "hmv"],
    Required: true,
  },
  Model: {
    type: String,
    Required: false,
  },
  VehicleNumber: {
    type: String,
    Required: true,
    minLength: 10,
    maxLength: 10,
    pattern: "^[A-Z|a-z]{2}[0-9]{2}[A-Z|a-z]{2}[0-9]{4}$",
  },
  Challan:{
    type:Number,
    default:0,
  }
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
