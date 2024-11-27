# Gestión de Tareas

Este es un proyecto de gestión de tareas que utiliza **Node.js** y **SQLite**. Permite agregar, mostrar y eliminar tareas desde una base de datos.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (Recomendado v14 o superior)
- [SQLite](https://www.sqlite.org/)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

Primero, clona el repositorio a tu máquina local:

```bash
git clone https://github.com/Carlos1825/gestion-tareas.git
cd gestion-tareas
2. Instalar dependencias
Dentro de la carpeta del proyecto, instala las dependencias del backend (Node.js):

bash
Copiar código
npm install
3. Configurar la base de datos SQLite
Asegúrate de que el archivo tareas.db esté correctamente configurado. Si es necesario, puedes crear el archivo de base de datos manualmente con las tablas correspondientes o utilizar un script de configuración que se incluya en el proyecto.

4. Ejecutar el backend
Para iniciar el backend, ejecuta el siguiente comando en la terminal:

bash
Copiar código
node server/server.js
Esto iniciará el servidor de Node.js en el puerto 3000.

5. Ejecutar el frontend
El frontend está contenido en la carpeta public y puedes abrir el archivo index.html directamente en tu navegador. Sin embargo, también puedes usar un servidor local para servir estos archivos.

Si prefieres usar un servidor de desarrollo, puedes instalar una herramienta como Live Server para Visual Studio Code o cualquier otra herramienta similar.

Uso
Abre el navegador y ve a http://localhost:3000 para acceder a la interfaz de gestión de tareas.
Puedes agregar nuevas tareas en el campo de texto y eliminarlas usando el botón correspondiente.
Estructura del proyecto
public/ - Contiene los archivos estáticos del frontend (index.html, styles.css, app.js).
server/ - Contiene el backend en Node.js (server.js).
tareas.db - Base de datos SQLite donde se almacenan las tareas.
git clone https://github.com/Carlos1825/gestion-tareas.git
cd gestion-tareas
2. Instalar dependencias
Dentro de la carpeta del proyecto, instala las dependencias del backend (Node.js):
