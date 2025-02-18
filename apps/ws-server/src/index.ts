import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"

const ws = new WebSocketServer({port:8081});

ws.on("connection", (socket) => {
    socket.on("message", async (data) => {
        const username = Math.floor(Math.random() * 1000).toString();
        const password = Math.floor(Math.random() * 1000).toString();
        await client.user.create({
            data:{
                username: username,
                password: password
            }
        })
        socket.send(data.toString())
    })
})


console.log("Websocket server is listening on port : 8081")
