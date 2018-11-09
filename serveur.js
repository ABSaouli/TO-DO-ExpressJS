const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('yes'));


app.listen(3000);