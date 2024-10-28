/*Una forma de declarar variables es:
import os from 'node:os';
import process from 'node:process';
import http from "http";*/

//Otra forma es:
const os = require("os");
const process = require("process");
const http = require("http");
const fs = require("fs"); //este es el que uso para trabajar con archivo json

//Cargar la configuración desde el archivo config.json
let config;
try {
    const data = fs.readFileSync('config.json', 'utf8');
    config = JSON.parse(data);
} catch (err) {
    console.error('Error leyendo el archivo de configuración:', err);
    config = { interval: 5 }; // Valor predeterminado si hay un error
}

const port = 4000;

//Información del sistema y versión de node.js
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Versión del SO:', os.version());
console.log('Nombre del host:', os.hostname());
console.log('Versión de Node.js:', process.version);

const systemInfo = () => {
    //Mostrándose información de: uso de CPU, uso de memoria, tiempo sist lleva activo, tiempo ejecutándose node.js
    console.log('Uso de CPU:', process.cpuUsage(), 'μs');
    console.log('Uso de memoria:', process.memoryUsage(), 'bytes');
    console.log('Tiempo que el sistema lleva activo:', os.uptime(), 'segundos');
    console.log('Tiempo que lleva ejecutándose node.js:', process.uptime(), 'segundos');
};

//Se debe ejecutar systemInfo periódicamente
setInterval(systemInfo, config.interval * 1000);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Showing some information about system and node's version in console</h1>");
    
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});