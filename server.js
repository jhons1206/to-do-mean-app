// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

// Crearemos la aplicación express y la configuramos...
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Config. del directorio 'dist' como directorio estático.
// En este directorio tendremos los archivos obtenidos en el build de nuestra aplicación Angular
app.use(express.static(path.join(__dirname, "dist")));

// Config. de las rutas
app.get("/api", (req, res) => {
  res.send("La API funciona");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/to-do-mean-app/index.html"));
});

// Config. del puerto de escucha
const port = process.env.PORT || "3000";
app.set("port", port);

// Creamos el servidor http con la aplicación express y abrimos puerto
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API running on localhost: ${port}`);
});
