# Tema 6: Node.js
## Ejercicio 1
Este ejercicio consiste en crear un servidor utilizando Node.js que muestra información del sistema y de la versión de Node.js. La configuración del servidor y de los parámetros se gestiona a través del archivo `config.json`.
- **Fecha**: 28-10-2024
- **Archivos incluidos**:
  - `ejercicio1.js`
  - `config.json`
## Ejercicio 3 
Este ejercicio consiste en crear un servidor en Node.js que, al cargar la página principal, genere y muestre una contraseña aleatoria. La contraseña se compone de palabras aleatorias obtenidas de un archivo de diccionario (`diccionario.txt`). Además, el número de palabras de la contraseña se especifica como parámetro en la query de la URL.
- **Fecha**: 30-10-2024
- **Archivos incluidos**:
  - `ejercicio3.js`
  - `diccionario.txt`
## Ejercicio 4
Este ejercicio consiste en realizar un **web scraping** utilizando la librería `cheerio` y `node-fetch` para obtener información de una página archivada en el **Internet Archive**. Se compara el contenido de dos versiones distintas de un mismo sitio web (en este caso, el sitio de **Spiegel**) y se extraen los titulares principales. 
- **Fecha**: 10-11-2024
- **Descripción**: 
  - Se accede a dos versiones de un sitio web almacenadas en **Wayback Machine**: una de 2013 y otra de 2023.
  - Se extraen los titulares principales (`h2` y `h3`) de ambas versiones.
  - Se comparan los titulares para identificar cambios y variaciones.
- **Archivos incluidos**:
  - `ejercicio4.js`
  - `package.json` (incluye las dependencias necesarias para el ejercicio, añadiendo "type":"module" para poder usar fetch)
