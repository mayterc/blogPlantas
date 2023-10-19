// console.log("Hola ")

//para seleccionar elemntos de la página web, se necesita querySelector
// querySelector solo almancena 0 o 1 elemento
const heading = document.querySelector("h2"); // almacenamos la seleecion de la etiqueta
// Para manipular la etiqueta, se hace de la sigueitne menra
heading.textContent = "Cambio con JS" // Cambiamos el contenido de la etiqueta, se puede ver en la pagina
heading.classList.add("nuevaClase"); //agregarle una nueva clase a la etiqueta
console.log(heading); //muestra en consola la eqitueta si esta mal la etiqueta  mostrara null

// querySelectorAll => Selecciona más de una elemento
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces); //muestra todo los enlaces
console.log(enlaces[1]);
enlaces.forEach(enlace => console.log(enlace)); //Con 