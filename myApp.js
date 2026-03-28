const express = require('express');
const helmet = require('helmet');
const app = express();













































module.exports = app;
const api = require('./server.js');
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.disable('strict-transport-security');
app.use(helmet.xssFilter());
app.use(helmet.noSniff())
app.use(helmet.ieNoOpen());
var ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({ maxAge: ninetyDaysInSeconds, force: true }));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache());
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Useful Programmer Info Securyti App Started on Port ${port}');
});
