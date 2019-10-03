const express = require('express');
const routes = require('./routes');
const app = express();

//informa para o express que ele irá trabalhar com formato json
app.use(express.json());
app.use(routes);


app.listen(3333);