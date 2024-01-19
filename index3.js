const express=require("express");
const app=express();

app.get("/login",(req,res)=>{
    res.end("this is a login page")
})

app.get("/",(req,res)=>{
    let a=4;
    if(a==9){
        res.end(req.url)
    }
    else{
        res.redirect("/login")
    }
});

app.listen(3000)