// const express = require("express");
// const app = express();

// app.use(express.json());

// const users = [{
//     name:"Sankalp",
//     kidneys:[{
//         healthy:true
//     },{
//         healthy:false
//     }]
// },{
//     name:"Jaiswal",
//     kidneys:[{
//         healthy:true
//     },{
//         healthy:true
//     }]
// },{
//     name:"Sankalp Jaiswal",
//     kidneys:[{
//         healthy:false
//     },{
//         healthy:false
//     }]
// }]

// app.get("/:num", (req,res)=>{
//     const num = req.params.num;
//     if(num>=0 && num<users.length){
//     const name = users[num].name
//     const totalKidneys = users[num].kidneys.length;
//     const healthyKidneys = users[num].kidneys.filter(kidneys => kidneys.healthy).length;
//     const unhealthyKidneys = totalKidneys - healthyKidneys;
//     res.json({
//         name,
//         totalKidneys,
//         healthyKidneys,
//         unhealthyKidneys
//     })}
//     else{
//         res.status(411).json({
//             msg:"Unable to fetch the data because of invalid input"
//         })
//     }
// })

// app.post("/", (req,res)=>{
//     const name = req.body.name;
//     const kidneys = req.body.kidneys;
//     users.push({
//         name:name,
//         kidneys:kidneys
//     })
//     res.send({
//         msg:"Added new user"
//     })
// })

// app.post("/:num", (req,res)=>{
//     const num = req.params.num;
//     const isHealthy = req.body.isHealthy;
//     users[num].kidneys.push({
//         healthy:isHealthy
//     })
//     res.json({
//         msg:"Added new kidneys successfully"
//     })
// })

// app.put("/:num", (req,res)=>{
//     const num = req.params.num
//     users[num].kidneys.forEach(kidneys =>
//         kidneys.healthy = true
//     )
//     res.json({
//         msg:"unhealthy kidneys updated to healthy kidneys"
//     })
// })

// app.delete("/:num", (req,res)=>{
//     const num = req.params.num
//     users[num].kidneys = users[num].kidneys.filter(kidneys => kidneys.healthy);
//     res.json({
//         msg:"removed unhealthy kidneys"
//     })
// })

// app.listen(3003);

const express = require("express");
const app = express();

app.use(express.json());

const users= [{
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

app.use(express.json())

app.get("/:num", (req,res)=>{
    const num = req.params.num;
    if(num>=0 && num<users.length){
    const name = users[num].name;
    const totalKidneys = users[num].kidneys.length;
    const healthyKidneys = users[num].kidneys.filter(kidneys => kidneys.healthy).length;
    const unhealthyKidneys = totalKidneys - healthyKidneys;
    res.json({
        name,
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })}
    else{
        res.status(411).send({
            "msg":"Invalid input"
        })
    }
})


app.post("/", (req,res)=>{
    const name = req.body.name;
    const kidneys = req.body.kidneys;
    users.push({
        name:name,
        kidneys:kidneys
    })
    res.send({
        msg:"Added new user sucessfully"
    })
})

app.post("/:num", (req,res)=>{
    const num = req.params.num;
    const isHealthy = req.body.isHealthy;
    users[num].kidneys.push({
        healthy:isHealthy
    })
    res.send({
        msg:"Added new kidney sucessfully"
    })
})

app.put("/:num", (req,res)=>{
    const num = req.params.num
    users[num].kidneys = users[num].kidneys.map(kidneys => ({healthy: true}));
    res.send({
        "msg":"Done Sucessfully"
    })
})


app.delete("/:num", (req,res)=>{
    const num = req.params.num
    users[num].kidneys = users[num].kidneys.filter(kidneys => kidneys.healthy)
    res.send(({
        msg:"removed unhealthy kidneys"
    }))
})
app.listen(3000);
