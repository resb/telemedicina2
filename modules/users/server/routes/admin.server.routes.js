'use strict';

/**
 * Module dependencies.
 */
var adminPolicy = require('../policies/admin.server.policy'),
  admin = require('../controllers/admin.server.controller');

module.exports = function (app) {
  // User route registration first. Ref: #713
  require('./users.server.routes.js')(app);

  // Users collection routes
  app.route('/api/users')
    .get(adminPolicy.isAllowed, admin.list);

  // Single user routes
  app.route('/api/users/:userId')
    .get(adminPolicy.isAllowed, admin.read)
    .put(adminPolicy.isAllowed, admin.update)
    .delete(adminPolicy.isAllowed, admin.delete);
  //Tarjetas  by User
  app.route('/api/users/:userId/tarjetas')
    .get(adminPolicy.isAllowed, admin.listforUser)
  
  app.route('/api/users/:userId/tarjetas/:tarjetaId')
    .get(adminPolicy.isAllowed, admin.listforUserID)
  // Finish by binding the user middleware
  app.param('userId', admin.userByID);
  app.param('tarjetaId', admin.tarjetaByID);

};

