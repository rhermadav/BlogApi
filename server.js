const winston = require('winston');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
  

const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;
const listen = app.listen(port, () => winston.info(`Listening on port ${port}...`));

//set up route
const post = require('./routes/postRoutes');
app.use('/posts', post);

//CONNECT to MONGODB
require('./Db/db')();

module.exports = listen;