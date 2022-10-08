const express=require('express')


const app=express();
 app.get("/",(req,res)=>{
    res.send({"testing":"3"})
 })


app.listen(4000,()=>{
console.log("testing the cicd pipeline versiont3");
})