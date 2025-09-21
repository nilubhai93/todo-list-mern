const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors  = require("cors");
const connectDB = require("./config/db");



// env config
dotenv.config();

// db connection
connectDB();

// rest object
const app = express()


 
// middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

// routes
app.use("/api/v1/test", require("./routes/testRouter"))
app.use("/api/v1/todo", require("./routes/todoRouter"))
app.use("/api/v1/user", require("./routes/userRoute"))

const PORT  = process.env.PORT;

// listen
app.listen(PORT,()=>{
    console.log("server is running...")
})
                            