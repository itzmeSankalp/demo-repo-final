const express = require("express");
const app = express();

function isOldEnough(age){
    if(age>=18){
        return true;
    }
    else
        false
}

function isOldEnoughMiddleware(req,res,next){
    const age = req.params.age
    if(age>=18)
        next()
    else{
        res.status(411).json({
            msg:"You are not of age yet"
        })
    }
}

app.get("/ride1/:age", isOldEnoughMiddleware, (req,res)=>{
    
        res.json({
        msg:"ride 1 riden successfully"
    })
})

app.get("/ride2/:age", (req,res)=>{
    const age = req.params.age
    if(isOldEnough(age))
        {res.json({
        msg:"ride 2 riden successfully"
    })}
    else{
        res.status(411).json({
            msg:"sorry you are not of age yet"
        })
    }
})
app.listen(3001);