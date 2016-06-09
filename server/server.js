var express = require('express');
var logger = require('log4js').getLogger('server');
var fs = require('fs');

var params = require('./config/params.js');

var app = express();

fs.readdirSync(__dirname + '/api/').forEach(function (file) {
  if(file.substr(-3) !== '.js') {
    //run the attachHandlers function inside module export
    require(__dirname + '//api/' + file).attachHandlers(app);
  }
});

app.listen(params.port);

logger.info('Server is running...');
