# Prettier

## ¿Qué es?

**Prettier** es un formateador de código que asegura un estilo más consistente en tu código, es compatible con múltiples lenguajes como JavaScript, TypeScript, HTML, CSS, entre otros.

## Instalación

Para instalarlo usar:
`npm i prettier`

## Reglas y configuración

Prettier utiliza configuraciones predeterminadas, pero puedes personalizarlo al agregar una sección de prettier en la configuración del package.json:
"prettier": {
"trailingComma": "es5",
"tabWidth": 2,
"semi": false,
"singleQuote": true,
"printWidth": 80
} 

También mediante un archivo mediante archivos como `.prettierrc`, `prettier.config.js`. Algunas opciones comunes incluyen:

- `semi`: Agregar o no punto y coma al final de las líneas (`true` o `false`)
- `singleQuote`: Usar comillas simples (`true`) o dobles (`false`)
- `tabWidth`: Número de espacios por tabulación
- `printWidth`: Longitud máxima de línea antes de envolver

## ¿Cómo se usa?

Ya que está instalado, puedes usar Prettier desde la línea de comandos para formatear un archivo en particular o todos en el proyecto:
npx prettier --write archivo.js
Puedes verificar si esta formateado correctamente con el sigueinte comando:
npx prettier --check archivo.js

Puedes agregar la sección scripts para facilitar el trabajo en el package.json
"scripts": {
"format": "prettier --write .",
"check-format": "prettier --check ."
}
Ahora se ejecutará para hacer lo mismo que con "npx prettier --write archivo.js" y "npx prettier --check archivo.js"
npm run format
npm run check-format

