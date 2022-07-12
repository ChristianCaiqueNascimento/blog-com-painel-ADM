const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Iniciando Projeto Blog")
});

app.listen(3000, ()=>{
    console.log("localhost: 3000")
});