const express = require('express');
const app = require("./config/expressConfig");
const connection = require("./config/dbmongo");
const router = require('./routes/routes');

app.set('views', __dirname + '/views');

app.use('/assets', express.static('publicCSS'));

app.use('/', router);

app.get('/login', (req, res)=>{
    res.render('login');
} );

app.get('/SingUp', (req, res)=>{
    res.render('newUS');
  } );


app.listen(3000, ()=>{
    console.log('je vous écoute sur le port 3000')
});