const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app!")
});

app.get("/sobre", function(req, res) {
    res.send("Esta é a página sobre o meu app!");
});

app.get("/blog", function(req, res) { 
    res.send("Bem-vindo ao meu blog!"); 
});

app.listen(8081, function(){
    console.log("Servidor rodando na URL http://localhost:8081");
});