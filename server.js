var express = require('express')
var app = express()

var connection = require('./config/connection')

var PORT = process.env.PORT || 8080

app.get('/', function(req, res){
    res.send('hskhsfljksljfhsljfzkjhskfj')
})

app.listen(PORT, function(){
    console.log('Running on PORT: ' + PORT)
})