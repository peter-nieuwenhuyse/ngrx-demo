'use strict';

const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

const port = process.env.PORT || 8080;

app.use(compression());

app.get('/health', function(req, res) {
  res.status(200).send('Health check is OK.');
});

app.get('/alive', function(req, res) {
  res.status(200).send('Liveness check is OK.');
});

app.use(helmet());

app.use(express.static(__dirname + '/dist/ngrx-redux/'));

app.enable('trust proxy');

app.get('/', function(req, res){
  res.render('index');
});
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/ngrx-redux/', 'index.html'));
});

app.listen(port, function() {
  console.log("Server running");
});
