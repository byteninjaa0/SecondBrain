import express from "express"
import { Content, User } from "./db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { usermiddleware } from "./user"
import cors from "cors"
import { text } from "stream/consumers"
const app = express()
app.use(express.json())
app.use(cors());
app.post("/api/v1/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    if(!username || !password){
      return res.status(400).json({message:"please give username and password"})
    }
    const hashedPassword=await bcrypt.hash(password,10);  
    await User.create({username,password:hashedPassword});
    res.json({ message: "User signed up" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error creating user" })
  }
})

app.post("/api/v1/login", async (req, res) => {
    const {username,password}=req.body;
const user = await User.findOne({ username });
    if(!user){
      return res.json({message:"connot find the user"});
    }
    const verify= await bcrypt.compare(password,user.password);
    if(!verify){
      return res.json({message:"wrong passsword"});
    }
    const token = jwt.sign({id:user._id},"sohail",{expiresIn:'1h'})
    res.json({message:"login successful",token}); 

})

app.post("/api/v1/content",usermiddleware, (req, res) => {
  const link=req.body.link;
  const type=req.body.type;
  Content.create({
    link,
    type,
    //@ts-ignore
    user:req.userId,
    tags:[]
  })
  res.json({message:"content added"})
})

app.get("/api/v1/content", usermiddleware,async (req, res) => {
  //@ts-ignore
  const userid=req.userId;
  const content = await Content.find({
    //@ts-ignore
    user:userid 
  }).populate("user","username")
  res.json({content});
})



module.exports = app;
