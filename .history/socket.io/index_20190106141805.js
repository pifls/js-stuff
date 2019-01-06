const express = require('express');
const socket = require('socket.io');

// App setup
const port = 3838;
const app = express();
const server  = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', socket => {
    console.log(`made a connection`); 
})
