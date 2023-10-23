// console.log("Hola ")

//para seleccionar elemntos de la página web, se necesita querySelector
// querySelector solo almancena 0 o 1 elemento
const heading = document.querySelector("h2"); // almacenamos la seleecion de la etiqueta
// Para manipular la etiqueta, se hace de la sigueitne menra
heading.textContent = "Blog de plantas con consejos y cursos"; // Cambiamos el contenido de la etiqueta, se puede ver en la pagina
heading.classList.add("nuevaClase"); //agregarle una nueva clase a la etiqueta
console.log(heading); //muestra en consola la eqitueta si esta mal la etiqueta  mostrara null

// querySelectorAll => Selecciona más de una elemento
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces); //muestra todo los enlaces
console.log(enlaces[1]);
enlaces.forEach(enlace => console.log(enlace)); //Mostrar todos los enlaces

//Generar un nuevo enlace usando JS
const nuevoEnlace = document.createElement('A');
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

//A que clase del html se queire agregar
nuevoEnlace.classList.add('navegacion_enlace');
//Agregarlo al documento html
const navegacion = document.querySelector(".navegacion");
navegacion.append(nuevoEnlace);

// EVENTOS
//Cada vez que se hace un 
console.log(1);
window.addEventListener('load', function () {
    console.log(2);
})

window.onload = function () {
    console.log(3)
}
window.addEventListener('DOMContentLoaded', function () {
    console.log(4);
})

console.log(5);

window.onscroll = function () {
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento
//const btnEnviar = document.querySelector(".boton-primario");
//btnEnviar.addEventListener('click', function (evento) {
 //   console.log(evento.target); //muestra en console donde se ha dado click
   // evento.preventDefault(); //se usa para validar formularios
    //console.log('Enviando formulario'); 
//})

//validar lo que se esta escribiendo dentro de TextAreas con eventos

const datos = { //Se crea un arreglo donde almacena lo que el cliente escriba en el formulario segun lo campos
    nombre: '',
    email: '',
    mensaje:''
}

const nombre = document.querySelector('#nombre'); 
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
//se puede colocar el evento change, pero se activa despues dl cambio, con input es una accion en timepo real
nombre.addEventListener('input', leerTexto); //para no hacer funciones repetivas para cada uno, se crea una funcion y se manda a llamar en los 3
email.addEventListener('input', leerTexto); //evento tipo input
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//Enviar formulario

const formulario = querySelector('.formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();


    //validar formulario
    const { nombre, email, mensaje } = datos; //aplicar destruction
    
    if (nombre === '' || email === '' || mensaje === '' ){
        console.log('DATOS VACIOS');
        return;
}
console.log('Enviando Formulario');
});
