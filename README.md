
## Proyecto Typescript desde cero

- En la carpeta `src` podés comenzar a escribir tus archivos `.ts`.
- Los tests los escribís en el mismo directorio `src` pero con extensión `spec.ts`.

## Antes de empezar a usarlo

Ejecutá el siguiente comando en la terminal:

```bash
npm i
```

De esa manera vas a instalar las dependencias de tu proyecto. También recomendamos que ejecutes en al consola

```bash
nvm install
nvm use
```

Así vas a instalar la versión de Node que recomendamos en la materia, a través de NVM (Node Version Manager).

## Para editar el Proyecto

Podés ejecutar el Visual Studio Code desde el menú inicio o bien usando Git Bash hacés

```bash
code .
```

en el directorio donde está el proyecto.

Recordá que tu instalación de Visual Studio Code requiere las extensiones que están en [la página específica de Typescript del sitio Algoritmos 3](https://algo3.uqbar-project.org/herramientas/typescript). Y que se instalan de la siguiente manera:

![extension installation](./images/extensions.gif)

## Para ejecutar los tests

### Ejecutar tests

Podés usar el plugin `Vitest` que los ejecuta dentro de tu editor:

![plugin Vitest](./images/vitest.gif)

### Debug tests

Haciendo click derecho te habilita otras opciones, como por ejemplo iniciar un debugger sobre un test parándote en un breakpoint previamente definido:

![debug vitest](./images/debug-vitest.gif)

Podés avanzar paso a paso, ingresar a cada método o función, etc. Para más información podés ver [esta página](https://code.visualstudio.com/docs/debugtest/debugging) donde está la documentación oficial.

### Por línea de comando

Y por último, desde el Git Bash o la línea de comando:

```bash
npm test
```

### % de cobertura y badge

```bash
npm run test:coverage
```

Eso te genera una carpeta `coverage` donde adentro podés navegar la página `index.html` en cualquier navegador.

## Para borrar archivos extras

Este proyecto tiene imágenes .gif y esta explicación en el README, si querés eliminarlos podés correr el script

```bash
npm run clean
```

## Archivos de configuración

Estos son todos los archivos de configuración de tu proyecto:

- `tsconfig.json`: es el archivo de configuración de Typescript de tu proyecto, que indica a qué versión de Javascript se está transpilando, eso indica qué herramientas podemos usar (por ejemplo, los decoradores de JS vienen en la versión ES2017)
- `package.json`: indica las dependencias del proyecto, la versión semántica, entre otras cosas.
- `package-lock.json`: es importante subirlo a git, tiene las dependencias exactas y completas del proyecto.
- `vitest.config.js`: es el archivo de configuración de Jest, el framework de testeo unitario que utilizamos.
- `.eslintrc`: la configuración del _linter_, que es el proceso que valida la correctitud del código. Por ejemplo, si definimos una variable `let` y no cambiamos la referencia, el linter nos va a pedir que la cambiemos a una definición `const`.
