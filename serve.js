const http = require('http');
const path = require('path');
const express = require('express');

let server;
const app = express();
app.use(express.static(path.join(__dirname, './build')));

server = new http.createServer(app);

server.on('error', err => console.log('Server error:', err));
server.listen(3000, () => {
    console.log('Server listening on port ' + process.env.PORT);
});
