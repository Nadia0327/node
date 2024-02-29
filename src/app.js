
import express from 'express';
import{dirname, join} from 'path';
import {fileURLToPath} from 'url';

//importar módulo de rutas
import indexRoutes from './routes/routes.js'
import {PORT} from "./config.js";

//llamar a express a traves de una variable
const app = express();

//Configurar mi app reciba JSON
app.use(express.json());
    
//configurar el dirname
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

//confugurar motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', join(__dirname,'views'));

//configurar indexRoues para las rutas
app.use(indexRoutes);

//definir la ruta de la carpeta estática public
app.use(express.static(join(__dirname,'public')));

//crear un servidor web
app.listen(PORT); //para que se escuche por el puerto 3000  

console.log('El servidor está en el puerto: ', PORT);