const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-go5rk.mongodb.net/semana9?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
const server = http.Server(app);
const io = socketio(server);

//subistituir posteriormente por mongo db ou redis
const connecedUsers = {};

//Escutando e gravando informações de usuários 
//conectados a aplicação
io.on('connection', socket =>{
  const { user_id } = socket.handshake.query;
  connecedUsers[user_id] = socket.id;
});

//através deste middleware disponibilizando em toda a aplicação
// o IO e os usuários conectados
app.use((req,resp,next)=>{
  req.io = io;
  req.connecedUsers = connecedUsers;
  return next();
});
//informa para o express que ele irá trabalhar com formato json
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);

server.listen(3333);