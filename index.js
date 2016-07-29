'use strict';

require('babel/register')({});

var server = require('./server');

const PORT = process.env.PORT || 3000;
console.log(PORT);
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});