const winston = require('winston');
const mongoose = require('mongoose');

module.exports= function () {
  mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true ,useUnifiedTopology: true})
    .then(()=>winston.info(`connected to mongodb...`))
    .catch((err) => console.error('could not connect to mongodb '));
}