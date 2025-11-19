## 🚀 Descripción

Este proyecto consiste en un servidor básico utilizando Node.js, Express y Socket.IO, diseñado para realizar pruebas locales de una aplicación de chat.

## 🛠️  Instalar dependencias

Dentro del proyecto, ejecutar:

npm install


Esto descargará automáticamente todas las dependencias listadas en el package.json (como express y socket.io).

## ▶️ Ejecutar el servidor

Una vez instaladas las dependencias:
```
node server.js
```

Luego podrás conectarte desde una aplicación cliente Socket.IO ejecutándose también de forma local.

## 📡 Eventos Socket.IO

- Servidor → Cliente
receiveMessage: Envía un mensaje a todos los clientes conectados.

- Cliente → Servidor
sendMessage: Envía un mensaje desde el cliente hacia el servidor.

## 🧪 Uso con aplicaciones de chat

Este servidor está pensado específicamente para pruebas locales, permitiendo simular un sistema de chat en tiempo real sin necesidad de un backend complejo.

Puedes combinarlo con clientes de cualquier entorno compatible con Socket.IO.
