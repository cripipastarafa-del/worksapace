const express = require('express');
const helmet = require('helmet');
const app = express();













































module.exports = app;
const api = require('./server.js');
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.disable('strict-transport-security');
app.use(helmet.xssFilter({}));
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Useful Programmer Info Securyti App Started on Port ${port}');
});
