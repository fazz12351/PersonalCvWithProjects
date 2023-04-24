const express=require("express")
const bodyParser=require("body-parser")
const ejs=require("ejs")
const app=express()
app.use(express.static("Public"))
app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("index",{

    })
})

app.listen(3000,function(){
    console.log("server is running ")
})