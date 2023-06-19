# mini_market_app

Link app desplegada: [https://mini-market-test-app.surge.sh/](https://mini-market-test-app.surge.sh/)

Aplicación que simula una tienda virtual, con funcionalidad de carrito de compras e incluyendo pago con pasarela de pagos

## Configuración

Sigue estos pasos para configurar el proyecto:

1. Clona este repositorio: `git clone https://github.com/David-Viuche/mini_market_app`
2. Navega hasta la carpeta del proyecto: `cd mini_market_app`
3. Instala las dependencias: `npm install`

## Uso en local

Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Asegúrate de estar en la raíz del proyecto.
2. Ejecuta el siguiente comando: `npm run dev`
3. Abre tu navegador y ve a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Generar una compilación (build)

Si deseas generar una compilación optimizada del proyecto, sigue estos pasos:

1. Asegúrate de estar en la raíz del proyecto.
2. Ejecuta el siguiente comando: `npm run build`
3. Los archivos compilados se generarán en la carpeta `dist/`.
4. Puedes desplegar estos archivos en un servidor web para su uso en producción.

## Ejecutar los Tests

Sigue estos pasos para ejecutar los tests utilizando Jest:

1. Asegúrate de tener Node.js y npm instalados en tu máquina.

2. Abre una terminal o línea de comandos.

3. Navega hasta la raíz de tu proyecto.

4. Ejecuta el siguiente comando para instalar las dependencias de desarrollo, incluyendo Jest:

   `
   npm install --dev
   `
5. Una vez que todas las dependencias se hayan instalado correctamente, ejecuta el siguiente comando para ejecutar los tests:
 `
  npm run test
   `
