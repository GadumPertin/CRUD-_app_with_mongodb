const app = require('./app');
const https = require('http')
const port = process.env.PORT || 5000;
const server = https.createServer(app);
server.listen(port);
