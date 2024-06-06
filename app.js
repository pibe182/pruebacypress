const express = require('express'); //importamos el módulo express, un framework que facilita la creacion de servidores web y APIs
const app = express();              //creamos instancia de express
const port = 3000;                  //definimos el puerto

app.get('/', (req, res) => {        //cuando alguien visita la raíz del servidor, el servidor responde "Hola Mundo"
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);  //se inicia servidor y cuando alguien se conecta nos muestra este mensaje
});
