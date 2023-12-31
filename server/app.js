const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(express.json());
const PORT = process.env.PORT;
app.use(require('./router/auth'));

app.listen(PORT, () => {
    console.log('Server is running at port '+PORT);
})