# pruebaMeli


## Como ejecutar

- 1 realizar un git clone al proyecto, o descargar el zip y descomprimir
- 2 Abrir en VSCode
- 3 abrir una terminal de comandos sobre el proyecto y ejecutar el comando npm i para que se instalen los paquetes requeridos
- 4 ejecutar el comando npm start
- 5 ejecutar en postman o aguna herramienta de pruebas de APIS los endpoints en el siguiente orden
    1 - setTraining#1
    2 - setTraining#2
    3 - setTraining#3
    4 - getStartingTeam
    (NOTA) - los datos estan en el archivo PruebaMeli.postman_Collection se pueden importar a postman para solo ejecutar o ver los json para cada el body en esta url
    https://github.com/poiodev/pruebaMeli/blob/main/PruebaMeli.postman_collection.json


## Buenas practicas y estandares utilizados

* se usa const y se evita el uso de let para mayor seguridad en variables donde su scope no va cambiar

* se usa module en vez de commonjs por mejores practicas de accesibilidad y optimizacion de recursos

* uso de variables de entorno

* arquitectura por capas para futura escalabilidad del proyecto y legibilidad

* separacion de dependencias con funciones individuales para cada tarea especifica apuntando al uso de principios SOLID

* validaciones de datos para no tener errores o calapsos en la aplicacion por uso erroneo

* no se uso try catch porque todos los errores del codigo son controlabes con validaciones al saber que error espesifico generan

## Como se resolvio el reto, paso a paso

- Se crea el proyecto con el comando  

```
npm i -y
```

- Se modifica el package.json para agregar el   

```
"type": "module"
```

 esto permite trabajar con modulos en vez de commonJS para mejores practicas

- se instalan los paquetes de express para el manejo del server nodejs y cors para permitir las conexiones desde cualquier parte usando el comando: 

```
npm i express cors dotenv
```

- se instala la libreria nodemon para que el servidor se reinicie al detectar cambios, pero este se instala en modo desarrollo para evitar instalaciones inecesarias en el hosting

```
npm i nodemon -D
```

- se modifica el package.json para que ejecute el nodemon con la app al ejecutar el comando npm start

```
"start": "nodemon index.js",
```

- se crea el archivo .env donde van las variables de entorno

PORT = 3022

- tambien se crea un archivo .gitignore para evitar cargar archivos inecesarios como la carpeta /node_modules

- se crea el archivo index.js donde ira la logica del server

se realizan las importaciones de express para crear el servidor y de cors para el acceso de peticiones desde cualquier lugar, y dotenv con su config para variables de entorno

```
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
```

- Se crea la variable de la app que ejecutara el servidor en express y 
la variable del puerto que en caso de no leer la variable de entorno ejecutaria el puerto 3000

```
const app = express();
const PORT = process.env.PORT || 3000;
```

- se especifica el uso de Json indicando que es el formato que se usara en la app y el uso de cors para permitir las peticiones

```
(express.json());
app.use(cors());
```

- se crea el listen que escucha la ejecucion del servidor y arroja un mensaje 

```
app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
```

- Se crea una ruta de carpetas usando arquitectura por capas  para separar la logica de negocio como las rutas y el controller

- dentro del archivo /routes/team.js se crea el codigo de los servicios get y post para los entrenamientos y para obtener el equipo titular

```
import express from "express";
import teamController from "../controller/team.js";
const router = express.Router();

router.post("/training", teamController.setTraining);
router.get("/starting-team", teamController.getStartingTeam);

export default router;
```

- Se crea el controller par amanejar la logica de negocio para los entrenamientos y obtener el equipo titular



