# EMAIL TEMPLATE GENERATOR

- Es un proyecto interno de la empresa, el cual ayudará al area de comercial y planificacion a optimizar el tiempo de ejecución y entrega de las plantillas, como también en la reutilizacion de las mismas.

## Flujo de la aplicación

- La primera vista es Home, esta da una breve descripción de lo que hace la web. 
- La siguiente sería el Login, aquí el usuario ingresa su email y contraseña que el área de sistemas le brinda.
- Al registrarse la primera vista que se verá es la de Select y en esta vista se escoge como se desea trabajar (utilizando una plantilla de la galeria o creando una).
- Si escoges la primera opción te llevará a la vista GetTemplate, donde se escogera una plantilla.
- Si escoges la segunda te llevará a la vista Editor, en esta vista se crean o modifican las plantillas.

## Tecnologias Utilizadas

- Material Design
- Reactjs
- JSX
- Redux
- React-router
- Grapes.js
- Moment.js

## Requerimientos

Se requiere tener las últimas versiones instaladas de:

- [nodejs - recomendable v9.7.1](https://nodejs.org/es/)

## Cómo desarrollarlo

Para desarrollar esta aplicación se debe trabajar en la carpeta **src**.

A la vez, se debe tener en cuenta para el desarrollo:

- [Los lineamientos técnicos](https://bitbucket.org/unt_taller_es/finderchallenge/wiki/Lineamientos%20t%C3%A9cnicos)

- [La distribución de archivos](https://bitbucket.org/unt_taller_es/finderchallenge/wiki/Estructura%20de%20directorios%20y%20archivos)

- [La estructura del archivo books-schema.json](https://bitbucket.org/unt_taller_es/finderchallenge/wiki/Estructura%20del%20archivo%20books-schema.json)

- [Las tareas de gulp en el desafío](https://bitbucket.org/unt_taller_es/finderchallenge/wiki/Tareas%20de%20gulp)

Lo preferente es desarrollar con el menor uso de librerías de terceros, en caso se necesite, se tiene esta guía:

- [Instalación de librerías terceras](https://bitbucket.org/unt_taller_es/finderchallenge/wiki/Instalaci%C3%B3n%20de%20librer%C3%ADas%20terceras)


## Inicialización del proyecto

Para visualizar la aplicación, ejecutar los siguientes comandos en consola:

```
npm install

npm start

```


## Entorno de desarrollo

Se debe crear archivo el archivo .env.local con las variables de entorno

REACT_APP_API_KEY = ""
REACT_APP_API_URL = ""

Para trabajar en entorno de production se debe tener instalado el paquete serve y el archivo .env.production.local con la variables indicadas

```npm install -g serve```

Luego ejecutar el comando para compilar el proyecto

```npm run build```

Para iniciar el proyecto con el siguiente comando

```serve -s build```