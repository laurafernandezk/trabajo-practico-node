# Trabajo práctico Node js

Se elaboró una API REST que permite manejar librerías y libros asociados a cada una de las librerías, como así también usuarios. A tal fin se utilizó Node.Js Express, Sequelize,  Passport y SQLlite

## Arquitectura

El proyecto se estructuró en base a controllers, services, providers y modelos.
* Controller: Es aquel que interactúa entre la petición que llega a la ruta (request) y lo que debe devolver el sistema (response)
* Service: Es aquel que contiene la lógica de negocio, ya no maneja requests ni resposes. Es una capa mas abstraída del usuario.
* Provider: Se encarga de llamar a recursos externos (en este caso una base de datos), sin contener lógica de negocio.
* Modelo: A través de éste se crean las entidades de la base de datos. 
