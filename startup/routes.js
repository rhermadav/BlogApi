const post = require('../routes/postRoutes');

module.exports = function(app) {
  app.use('./post', post);
}