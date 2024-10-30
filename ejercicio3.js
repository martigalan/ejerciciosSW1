const http = require('http');
const fs = require('fs');
const express = require('express');
//const app = express(); con esto añado puertos de manera más sencilla

const port = 4000;
//const port2 = 5000; para prueba de distintos statusCode
let diccionario = [];

fs.readFile('diccionario.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    return;
    }
    //console.log(data); FUNCIONA!
    diccionario = data.split(",").filter(word => word.length > 0); // Dividir en palabras 
});

function generarContra(numPalabras) {
    const noRepetir = true;
    let randPSWD = "";
    
    for (let i = 0; i < numPalabras; i++) {
        let randIndex;
        do {
            randIndex = Math.floor(Math.random() * diccionario.length-1);
        } while (noRepetir && diccionario.includes(randIndex));
        
        let word = diccionario[randIndex];

        randPSWD += word;
        
    }
    return randPSWD;
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${port}`); //http://localhost:4000/?x=3 ejemplo de como introducir número de palabras
    const numPalabras = parseInt(url.searchParams.get("x")) || 4; //sino introduzco nada, por defecto son 4 palabras

    const password = generarContra(numPalabras);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<meta charset="UTF-8"><h1>Showing random password</h1><p>Contraseña generada: ${password.replaceAll(" ","")}</p>`);//eliminando líneas vacías
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

/*para ver las distintas request cambiando res.statusCode
const server2 = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${port}/pepito`);
    const numPalabras = parseInt(url.searchParams.get("x")) || 4;

    const password = generarContra(numPalabras);
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<meta charset="UTF-8"><h1>Showing random password</h1><p>Contraseña generada: ${password.replaceAll(" ","")}</p>`);
});

server2.listen(port2, () => {
    console.log(`Server running at port ${port2}`);
});*/
