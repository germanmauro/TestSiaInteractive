const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", ws => {
    console.log("cliente conectado");
    
    ws.on("message",data => {
        console.log('El cliente envio: ' + data);
        const info = data.toString();
        wss.clients.forEach(
            client => {client.send(info)}
        )
        // ws.send(data.toString());
    });

    ws.on("close", () => {
        console.log("Conexión Cerrada");
    });

});