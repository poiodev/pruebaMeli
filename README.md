# pruebaMeli

## Buenas practicas y estandares utilizados

* se usa const y se evita el uso de let para mayor seguridad en variables donde su scope no va cambiar

* se usa module en vez de commonjs 

* uso de variables de entorno

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







