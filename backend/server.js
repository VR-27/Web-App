const express = require("express");
const cors = require("cors");
const User = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async(req,res)=>{

const {name,email} = req.body;

const user = new User({name,email});

await user.save();

res.send("User saved");

});

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});