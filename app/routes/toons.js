'use strict';

// Toons routes use toons controller
var toons = require('../controllers/toons');

module.exports = function(app) {
    app.get('/toons', toons.all);
    app.post('/toons', toons.create);
    app.get('/toons/:toonId', toons.show);
    app.put('/toons/:toonId', toons.update);
    app.delete('/toons/:toonId', toons.destroy);

    app.param('toonId', toons.toon);
};