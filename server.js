'use strict';

var express=require('express');

var app=express();

const PORT = 3000;
const HOST = '0.0.0.0'

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.render("index");
});

app.listen(3000,function(req,res){
	console.log("localhost 3000 hast started");
	console.log(`${HOST}:${PORT}`);
});