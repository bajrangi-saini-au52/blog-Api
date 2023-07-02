const express = require('express')
const jsw = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const app = express();

const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(cookieParser())

// ROUTE import
 
const router = require("./routes/userRoute")
const title = require("./routes/titleRoute")




app.use("/api/v1",router)
app.use("api/v1",title)



 



module.exports = app

