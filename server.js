let harrow= require("./data/Harrow.json");
let startford= require("./data/Stratford.json");
let heatrow= require("./data/Heathrow.json");

const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send({
        "/pharmacies": "returns an array of pharmacies in a specific area",
        "/colleges": "returns an array of colleges in a specific area",
        "/schools": "returns an array of schools in a specific area"
    }
       ) 
    }
)

app.listen(port,()=>{
    console.log("tyu")
})
