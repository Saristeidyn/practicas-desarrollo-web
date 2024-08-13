
let numero = 100; // Variable global, tipo numero entero
console.log(numero)
let decimal = 10.5; // Variable global, tipo numero decimal
console.log(decimal)

let texto = "Hollo World";
let texto2 = 'Hola mundo';

let boolean = true;
let arreglo = [1, 2, 3, 4, 5];
let arreglo2 = ["a", "b", "c", "d", "e"];
console.log(arreglo2);
console.log(arreglo2[3]);
console.log(arreglo2[-2]);

let arregloMixto = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e", true, false];

console.log(arregloMixto);

arregloMixto[0]="Hola";
console.log(arregloMixto);

let objeto = {
    nombre : "saray",
    edad : 30,
    telefono : "1234567890"
}
console.log(objeto);
console.log(objeto.telefono);
console.log(objeto["edad"]);
console.log("Nombre" + objeto.nombre);

let estudiante = {
    nombre : "saray martinez",
    matricula : "122112",
    carrera : "Ing. de software y Sistemas",
    materias : ["Matth", "program", "Base de datos"],

    amigos : [
        {
        nombre : "pedro",
        telefono : "1234567890"
    },
    {
        nombre : "Maria (crush)",
        telefono : "0987654321"
        
    }]
}

console.log(estudiante.materias[1]);
console.log(estudiante.amigos[1].nombre);

let variable = 10;
console.log(typeof variable);

let variable2 = '10.5';
console.log(typeof variable2)

let varable3 = true;
console.log(typeof varable3);

let varable4 = [1, 2, 3, 4 , 5];
console.log(typeof varable4)

let varable5 = {
    nombre : "juan",
    edad: 30,
    telefono : "1243122"
}
console.log(typeof varable5.telefono);
let saludo, nombre = "juan";
nombre = "Saray";
console.log(nombre);

