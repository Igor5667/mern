const app = require("./app")
const PORT = 8080
const mongoose = require("mongoose")


app.listen(PORT, ()=>console.log(`Server expess is running on port ${PORT}`))

process.on('SIGINT',async ()=>{
    console.log("Closing MongoDB")
    try{
        await mongoose.disconnect()
        console.log("MongoDb connection closed")
    }
    catch(err){
        console.log(`Closing MongoDB Error: ${err.message}`)
    }
    finally{
        process.exit()
    }
    
})














// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")

// const app = express()
// const PORT = 8080

// app.use(express.json())
// app.use(cors())

// const myDataBase = "myDB"
// const url = `mongodb://localhost:27017/${myDataBase}`
// mongoose.connect(url)
//     .then(()=>console.log("Connect to mongo DB"))
//     .catch((err)=>console.log("Connection error", err.message))

// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: String,
//     age: Number
// })

// const User = mongoose.model("User", userSchema)

// app.get("/api/users", async (req, res)=>{
//     try{
//         const users = await User.find({})
//         res.json(users)
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// })

// app.post("/api/users", async(req, res)=>{
//     try{
//         const newUser = new User(req.body)
//         await newUser.save()
//         res.status(201).json(newUser)
//     } catch(err){
//         console.log(`POST ERROR ${err.message}`)
//         req.status(400).json(err)
//     }
// })

// app.delete("/api/users/:id", async (req, res)=>{
//     const userId = req.params.id
//     console.log(userId)
//     try{
//         const deletedUser = await User.findByIdAndDelete(userId)
//         if(!deletedUser){
//             return res.status(404).json({message: "User not found"})
//         }
//         res.json({message:"User deleted ✔"})
//     }catch(err){
//         res.status(500).json({message: err.message})
//     }
// })



// app.listen(PORT, ()=>console.log(`Server expess is running on port ${PORT}`))

// process.on('SIGINT', ()=>{
//     console.log("Closing MongoDB")
//     mongoose.disconnect().then(()=>console.log("MogoDB connection closed")).finally(()=>process.exit())
// })