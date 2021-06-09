//Ingreso de datos alumno
var nombre = prompt("Ingrese su nombre y apellido", "Valentina Cifuentes");
var carrera = prompt("Ingrese su carrera", "Desarrollo Fullstack");

//Variables ramo 1
var ramo1 = prompt("Ingrese el primer ramo", "HTML");
var n1ramo1 = prompt("Ingrese la nota 1 [" + ramo1 + "]", "7");
var n2ramo1 = prompt("Ingrese la nota 2 [" + ramo1 + "]", "7");
var n3ramo1 = prompt("Ingrese la nota 3 [" + ramo1 + "]", "7");
promedio1 = (parseFloat(n1ramo1)+ parseFloat(n2ramo1) + parseFloat(n3ramo1))/3;

//Variables ramo 2
var ramo2 = prompt("Ingrese el segundo ramo", "CSS");
var n1ramo2 = prompt("Ingrese la nota 1 [" + ramo2 + "]", "7");
var n2ramo2 = prompt("Ingrese la nota 2 [" + ramo2 + "]", "7");
var n3ramo2 = prompt("Ingrese la nota 3 [" + ramo2 + "]", "7");
promedio2 = (parseFloat(n1ramo2)+ parseFloat(n2ramo2) + parseFloat(n3ramo2))/3;

//Variables ramo 3
var ramo3 = prompt("Ingrese el tercer ramo", "JavaScript");
var n1ramo3 = prompt("Ingrese la nota 1 [" + ramo3 + "]", "7");
var n2ramo3 = prompt("Ingrese la nota 2 [" + ramo3 + "]", "7");
var notarequerida = prompt("Ingrese la nota final requerida para aprobar " + ramo3 + "", "4");
promedio3 = ((n1ramo3+n2ramo3+x)/3);
var x = 3

    //Inicio de página
    document.write("<div class='container py-3'>");
    document.write("<div class='row'>");
    document.write("<div class='col'>");
    document.write("<h1 class='py-3'>Notas finales</h1>");

    //Ingreso de datos alumno
    document.write("<p class='fw-bold d-inline'>Nombre: </p>");
    document.write("<p class='d-inline'> " + nombre + " </p>");
    document.write("<br></br>");
    document.write("<p class='fw-bold d-inline'>Carrera: </p>");
    document.write("<p class='d-inline'> " + carrera + " </p>");
    document.write("<br></br>");
    document.write("</div>");
    document.write("<div class='col-6'>");
    document.write("</div>");
    document.write("<div class='col-2'>");
    document.write("<img src='assets/img/logodesafiolatam.png' alt='Logo' class='img-fluid'>");
    document.write("</div>");
    document.write("</div>");

    //Encabezado tabla//
    document.write("<table class='table fw-bold'>");
    document.write("<thead class='bg-dark text-white'>");
    document.write("<tr>");
    document.write("<th scope='col'>Ramo</th>");
    document.write("<th scope='col'>Nota 1</th>");
    document.write("<th scope='col'>Nota 2</th>");
    document.write("<th scope='col'>Nota 3</th>");
    document.write("<th scope='col'>Promedio</th>");
    document.write("</tr>");
    document.write("</thead>");
    
    //Ingreso de notas ramo 1
    var prom1 = promedio1.toFixed(2);

    document.write("<tbody>");
    document.write("<tr>");
    document.write("<th scope='row'>"+ramo1+"</th>");
    document.write("<td>"+n1ramo1+"</td>");
    document.write("<td>"+n2ramo1+"</td>");
    document.write("<td>"+n3ramo1+"</td>");
    document.write("<td>"+prom1+"</td>");
    document.write("</tr>");

    //Ingreso de notas ramo 2
    var prom2 = promedio2.toFixed(2);

    document.write("<tr>");
    document.write("<th scope='row'>" + ramo2 + "</th>");
    document.write("<td>"+n1ramo2+"</td>");
    document.write("<td>"+n2ramo2+"</td>");
    document.write("<td>"+n3ramo2+"</td>");
    document.write("<td>"+prom2+"</td>");
    document.write("</tr>");

    //Ingreso de notas ramo 3
    var prom3 = promedio3.toFixed(2);
    var x = 

    document.write("<tr>");
    document.write("<th scope='row'>" + ramo3 + "</th>");
    document.write("<td>"+n1ramo3+"</td>");
    document.write("<td>"+n2ramo3+"</td>");
    document.write("<td>-</td>");
    document.write("<td>-</td>");
    document.write("</tr>");
    document.write("</tbody>");
    document.write("</table>");

    //Mensaje final
    document.write("<p>Para aprobar el ramo " + ramo3 + " con nota "+notarequerida+", necesitas obtener un x en la nota 3</p>");
    document.write("</div>");

    //Comentario
    //Me falta estudiar las grillas!! Pero hice lo que pude, ya lo mejorare! :) -V


    

