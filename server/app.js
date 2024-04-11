const express = require("express")
const cors = require("cors")
const connectionToMongoDB = require("./config/database")
const usersRoutes = require("./routes/users")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/users", usersRoutes)

const myDataBase = "myDB"
const url = `mongodb://localhost:27017/${myDataBase}`
connectionToMongoDB(url)

module.exports=app