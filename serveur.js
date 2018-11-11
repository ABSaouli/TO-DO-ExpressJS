const express = require('express');
const app = require("./config/expressConfig");
app.set('views', __dirname + '/views');
app.use('/assets', express.static('publicCSS'));

app.get('/login', (req, res)=>{
    res.render('login');
} );


app.get('/SingUp', (req, res)=>{
    res.render('newUS');
  } );


app.listen(3000, ()=>{
    console.log('je vous écoute sur le port 3000')
});