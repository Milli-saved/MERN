const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const app = express()

// connection to the database
mongoose.connect(process.env.DATABASE_STRING).then(()=>{
    console.log("Connected to the database.")
})


//middlewares
app.use("/api/v1/users",userRouter);


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is running at http://localhost:8000")
});
