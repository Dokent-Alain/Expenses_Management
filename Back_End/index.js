'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/UserRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.use('/api', UserRoutes.routes);


console.log(config.port);

app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));


