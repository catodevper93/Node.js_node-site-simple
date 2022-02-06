
const express = require("express");

// usamos el módulo morgan para recibir por consola las peticiones del usuario por cada ruta entrada
const morgan = require("morgan");

const path = require("path");

const rutas = require("./src/routes/index");


// iniciamos nueva app de express
const app = express();


const PUERTO = process.env.PORT || 3000;


app.set("puerto", PUERTO);


// console.log(__dirname); //--> C:\Users\gasto\Desktop\site-in-nodejs

// CONFIGURACIÓN DE MOTOR DE PLANTILLA
app.set("views", path.join(__dirname, "src/views"));

app.set("view engine", "ejs");



// MIDDLEWARE
app.use(morgan('dev'));
app.use(rutas);

/* archivos estáticos como css, js, img, etc. todo en la carpeta "public" previamente creada,
por lo que a la hora de acceder a los archivos de la carpeta public simplemente lo haremos por
ejemplo /img, /css, etc.*/
app.use(express.static(path.join(__dirname, "src/public")));




// escuchamos el servidor en el puerto especificado
app.listen(app.get("puerto"), ()=>{
    console.log("Server run on port", app.get("puerto"));

});