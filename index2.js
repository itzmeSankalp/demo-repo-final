// const express = require("express");

// function sum(num){
//     let totalSum = 0
//     for(let i= 1; i<=num;i++){
//         totalSum += i;
//     }
//     return totalSum
// }

// const app = express();

// app.get("/", (req,res)=>{
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send(ans)
// })

// app.listen(3000)


// const express = require("express");
// const app = express();

// function calculateSum(a,b){
//     return a+ b;
// }

// app.get("/add", (req,res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     const ans = calculateSum(a,b)
//     res.send(ans);
// })

// app.listen(3000)


// const express = require("express");
// const app = express();

// app.get("/sum", (req,res)=>{
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         "a+b": a+b
//     })
// })

// app.listen(3000);

let users =[{
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
}]

const express = require("express");
const app = express();

app.get("/", (req,res)=>{

    const a = req.query.a;
    res.json({
        "status is ":users[a].kidneys
    })
    console.log(users[a].kidneys)
})

app.use(express.json())

app.get("/:num",(req,res)=>{
    const num = req.params.num;
    const totalKidneys = users[num].kidneys.length;
    const healthyKidneys = users[num].kidneys.filter(kidneys => kidneys.healthy).length;
    const unhealthyKidneys = totalKidneys - healthyKidneys;
    console.log(`Total kidneys =${totalKidneys}, and heatlthy kidneys are ${healthyKidneys} and unhealthy kidneys are ${unhealthyKidneys}`)
    res.json({
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})


app.post("/:num", (req,res)=>{
    const num = req.params.num;

    const isHealthy = req.body.isHealthy;
    users[num].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Added Succesfully"
    })
})

app.put("/:num", (req,res)=>{
    const num = req.params.num;
    users[num].kidneys.map(kidneys => kidneys.healthy = true);

    res.json({})
})


app.delete("/:num", (req,res)=>{
    const num = req.params.num;
    res.status(411).json({
        msg:"Done"
    })
})

app.listen(3000)