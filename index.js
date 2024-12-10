const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static("/public"));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');

})

server.listen(9000, ()=> console.log('server started at port ' , 9000))