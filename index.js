// const http = require('http');

// http.createServer((req,res)=>{
//     res.write('<h1> Hello my name is Taehyun');
//     res.end();
// }).listen(8080);

//IMPORTS
const express = require('express');
const morgan = require('morgan');

//APP INIT
const app = express();

//First Route www.hi.com/index -> this part is route
app.get('/',(req,res)=>{
    res.json({message:"what is my name?"})
})

app.listen('8081');
