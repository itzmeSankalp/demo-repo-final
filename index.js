const express = require("express");
const app = express();

app.use(express.json());

const users = [{
    name:"Sankalp",
    kidneys:[{
        healthy:true
    },{
        healthy:false
    }]
},{
    name:"Jaiswal",
    kidneys:[{
        healthy:true
    },{
        healthy:true
    }]
},{
    name:"Sankalp Jaiswal",
    kidneys:[{
        healthy:false
    },{
        healthy:false
    }]
}]


app.get("/:num", (req,res)=>{

    const num = req.params.num;
    if(num < users.length){
    const name = users[num].name
    const totalKidneys = users[num].kidneys.length;
    const healthyKidneys = users[num].kidneys.filter(kidneys => kidneys.healthy).length;
    const unhealthyKidneys = totalKidneys - healthyKidneys;
    
     res.json({
        name,
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })    
    }
    else{
        res.status(411).json({
            "msg":"You have hit wrong endpoint"
        })
    }
    
})

app.post("/:num", (req,res)=>{
    const num = req.params.num
    const isHealthy = req.body.isHealthy;
    
    users[num].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})

app.post("/", (req,res)=>{
    const name = req.body.name;
    const kidneys = req.body.kidneys;
    users.push({
        name:name,
        kidneys:kidneys
    })
    res.json({
        msg:"Done"
    })
})

app.put("/:num", (req,res)=>{
    const num = req.params.num
    
})

app.delete("/:num", (req,res)=>{
    const num = req.params.num
    
})
app.listen(3000)