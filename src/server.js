const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-go5rk.mongodb.net/semana9?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();

//informa para o express que ele irá trabalhar com formato json
app.use(express.json());
app.use(routes);

app.listen(3333);