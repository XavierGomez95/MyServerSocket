const express = require('express')
const http = require('http');
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const port = process.env.PORT || 3000;

io.on('connection', (socket)=>{
    const clientId = socket.id
    console.log(`${clientId} client connected`);
    socket.on('sendMessage', (newMessage) => {
        console.log(`(ClientId: ${clientId}) Message: ${newMessage}`);
        io.emit('receiveMessage',{
            message : newMessage,
            id : clientId
        })
    })

})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})