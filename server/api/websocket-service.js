const express = require('express');
const http = require('http');

const cors = require('cors');
const { Socket } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io =require('socket.io')(server, {cors: {origin: "*"}});


const corsOptions = {
  origin: ['*'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const clients = {};


  io.on('connection', (socket) => { 
    let id = socket.handshake.query.client;
    Object.assign(clients, {id:socket});

  });


  io.on('close', () => {
    console.log('Client disconnected');
    // Clean up client registrations on disconnect
    Object.keys(clients).forEach(clientId => {
      if (clients[clientId] === ws) {
        delete clients[clientId];
        console.log(`Client ${clientId} unregistered`);
      }
    });
  });


  function broadcastAll(message) {
    console.log('reached broadcastAll method inside websocket-service %o', clients[1])
    Object.values(clients).forEach(clientObj => {
        clientObj.send(JSON.stringify({ type: 'update', data: message.data }));
    });
    return;
  } 

  
  server.listen(8080, () => {
    console.log('Websocket server is listening on port 8080');
  });

  module.exports = broadcastAll;