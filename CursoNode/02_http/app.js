//SOLICITAR UM MODULO INTERNO DO NODE CHAMADO http
var http = require('http')

//Abrindo um servidor http
http.createServer(function(req,res){
    res.end("OI ETEC MCM")
}).listen(8081)

console.log('Servidor rodando...')