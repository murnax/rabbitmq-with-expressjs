'use strict';

const express = require('express');
const app = express();

const amqpClient = require('./amqpClient');

let channel;
amqpClient.createClient({ url: 'amqp:localhost' })
  .then(ch => {
    // channel is kept for later use
    channel = ch;
  });


app.get('/fibonacci/:number', function(req, res) {
  const number = req.params.number;
  amqpClient.sendRPCMessage(channel, number, 'rpc_queue')
    .then(msg => {
      const result = JSON.parse(msg.toString());
      res.json(result);
    });
});

const server = require('http').createServer(app);
server.listen(3000, function() {
  console.log('App started.');
});