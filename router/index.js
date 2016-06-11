
'use strict';

module.exports = function (app) {

  // APIs
  app.use('/api',  require('./api'));
  app.use('/auth', require('./auth'));

  // Routes
  app.use('/', require('./routes/index'));
  app.use('/profile', require('./routes/profile'));
  app.use('/analyze', require('./routes/results'));
  app.use('/buddies', require('./routes/buddies'));

  app.use('/sunburst', require('./routes/sunburst'));

};
