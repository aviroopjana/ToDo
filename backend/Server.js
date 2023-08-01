const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT,()=> {
    console.log(`Listening on ${PORT}`);
})