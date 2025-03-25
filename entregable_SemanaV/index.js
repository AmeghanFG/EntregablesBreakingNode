const fs = require('node:fs');
const file = "file.txt";
const argumentos = process.argv;

if (argumentos.length < 3) {
    console.log('Agrega el archivo que quieres que cuente las palabras, ahora se mostrará el archivo por defecto.');
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log('Error al leer el archivo' + err);
            return;
        }
        
        const palabras = data.split(/\s+/);
        const filtro = palabras.filter((element) => element.length > 0);
    
        console.log(`El archivo tiene ${filtro.length} palabras`);
    });
} else {
    const archivo = argumentos[2]; 
    fs.readFile(archivo, "utf-8", (err, data) => {
        if(err) {
            console.log('Error al leer el archivo' + err);
            return;
        }
        
        const palabras = data.split(/\s+/);
        const filtro = palabras.filter((element) => element.length > 0);
    
        console.log(`El archivo tiene ${filtro.length} palabras :)`);
    });
}