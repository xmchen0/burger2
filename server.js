var express = require('express')
var app = express()

var connection = require('./config/connection')

var PORT = process.env.PORT || 8080

app.get('/', function(req, res){
    connection.query("select * from todos", function(error, results){
        if(error){
            res.json(error)
        }else{
            res.json(results)
        }
    })
})

app.listen(PORT, function(){
    console.log('Running on PORT: ' + PORT)
})