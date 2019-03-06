var nws = require('node-web-server');
//  Launch (launch __dirname as current directory with localhost: 8080)
  nws.run({
    host: "localhost",
    port: 8080,
    docRoot: "www"
  }, __dirname);
//  stop after 10 seconds
setTimeout(nws.stop, 10000);