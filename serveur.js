const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({secret: 'test'}));

app.get('/', (req, res) => res.send('yes'));


app.listen(3000, ()=>{
    console.log('je vous écoute sur le port 3000')
});