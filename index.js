const express = require('express');
const http = require('http');
const {Server} =require('socket.io')

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on('connection' , (client) => {
    
    client.on('user-message', (data) => {
        console.log("new message " ,data);
        io.emit("message",data);
        
    })

})



app.use(express.static("/public"));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');

})

server.listen(9000, ()=> console.log('server started at port ' , 9000))