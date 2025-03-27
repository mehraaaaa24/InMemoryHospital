const express = require("express")
const app = express()

var users = [{
    name: "Harshul",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidenys = johnKidneys.length;
    let numberOfHealthyKidenys = 0
    for (let i = 0; i < numberOfKidenys; i++) {
        if (johnKidneys[i].healthy == true) {
            numberOfHealthyKidenys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidenys - numberOfHealthyKidenys;
    res.json({
        numberOfKidenys,
        numberOfHealthyKidenys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json());
// user can add a new kidney
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })
})

app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {
    // this should run only if there is atleast one bad kidney in the person

    const newKidneys = [];
    const numberOfKidenys = users[0].kidneys.length;
    for (let i = 0; i < numberOfKidenys; i++) {
        if (users[0].kidneys[i].healthy == true) {
            newKidneys.push({
                healthy: true
            })
        } 
    }
    users.kidneys[0] = newKidneys
    res.json({
        msg: "done"
    })
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthy = true;
        }
    }
}

app.listen(3000);