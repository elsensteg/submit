
// package dependency
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()

// calling mongoose
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crud.x5bn6yb.mongodb.net/semester`)
.then (() => console.log("Successfully connected to MongoDB"))
.catch ((err) => console.log(err))

require ('./user');