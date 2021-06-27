// Definimos nuestras datos
var nombre = prompt("Ingresa nombre: ")
var apellido = prompt("Ingresa apellido: ")
var carrera = prompt("Ingresa Carrera: ")
    // Definimos nuestras variables Ramo 1
var ramo1 = prompt("Ingresa Ramo: ")
var nota11 = prompt(`Ingresa nota 1 [${ramo1}]: `)
var nota12 = prompt(`Ingresa nota 2 [${ramo1}]: `)
var nota13 = prompt(`Ingresa nota 3 [${ramo1}]: `)
    // Definimos nuestras variables Ramo 2
var ramo2 = prompt("Ingresa Ramo: ")
var nota21 = prompt(`Ingresa nota 1 [${ramo2}]: `)
var nota22 = prompt(`Ingresa nota 2 [${ramo2}]: `)
var nota23 = prompt(`Ingresa nota 3 [${ramo2}]: `)
    // Definimos nuestras variables Ramo 3
var ramo3 = prompt("Ingresa Ramo: ")
var nota31 = prompt(`Ingresa nota 1 [${ramo3}]: `)
var nota32 = prompt(`Ingresa nota 2 [${ramo3}]: `)
const guion = '-';
// Calula promedio de notas
var promedio1 = (parseInt(nota11) + parseInt(nota12) + parseInt(nota13)) / 3;
var promedio2 = (parseInt(nota21) + parseInt(nota22) + parseInt(nota23)) / 3;
var promedio3 = (parseFloat(nota31) + parseFloat(nota32)) / 2
    //Comienzo del contenedor
document.write("<div class='container'>");
document.write("<div class='titulo'>");
document.write("<h1>Notas Finales</h1> ")
document.write("<img src='./assets/img/logo.jpg' alt='logo'>")
document.write("</div>");
// Imprimimos nombre y apellido
document.write("<div>");
document.write("<tr>");
document.write("<div>");
document.write("<b>Nombre: </b>");
document.write(`<td> ${nombre} ${apellido} </td>`);
document.write("</div>");
// Imprimimos la carrera
document.write("<tr>");
document.write("<div>");
document.write("<b>Carrera: </b>");
document.write("<td>" + carrera + "</td>");
document.write("</div>");
//Aquí creamos nuestra tabla con bootstrap
document.write("<thead>");
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla
document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
//Aquí imprimimos datos ingresados para materia 1
document.write("<tr>");
document.write("<div class='ramo1'>");
document.write("<td><b>" + ramo1 + "</b></td>");
document.write("<td>" + nota11 + "</td>");
document.write("<td>" + nota12 + "</td>");
document.write("<td>" + nota13 + "</td>");
document.write("<td>" + promedio1.toFixed(2) + "</td>");
document.write("</div>");
document.write("</tr>");
//Aquí imprimimos datos ingresados para materia 2
document.write("<tr>");
document.write("<td><b>" + ramo2 + "</b></td>");
document.write("<td>" + nota21 + "</td>");
document.write("<td>" + nota22 + "</td>");
document.write("<td>" + nota23 + "</td>");
document.write("<td>" + promedio2.toFixed(2) + "</td>");
document.write("</tr>");
//Aquí imprimimos datos ingresados para materia 3
document.write("<tr>");
document.write("<td><b>" + ramo3 + "</b></td>");
document.write("<td>" + nota31 + "</td>");
document.write("<td>" + nota32 + "</td>");
document.write("<td>" + guion + "</td>");
document.write("<td>" + guion + "</td>");
document.write("</tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table>");
//Aquí cerramos nuestra tabla
//Aquí cerramos nuestro div contenedor

//Mensaje de nota que se debe sacar para aprobar materia
document.write("<tr>");
document.write("<div>");
document.write(`<td> Para aprobar el ramo [<b>${ramo3}</b>] con nota ${promedio3.toFixed(2)}, necesitas obtener un <b>${promedio3.toFixed(2)}</b> en la nota 3.</td>`);
document.write("</div>");

// document.write("</div>");