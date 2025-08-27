const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("HelloDocker");
});
app.listen(9000,()=>{
    console.log("app run on 9000.....")
})