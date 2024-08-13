const fruits = ["apple", "orange", "bannana", "kiwi"];

let size = fruits.length;
console.log(size);

let contenido = ""
for( let i = 0; i < size; i++) {
    console.log(fruits[i]);
    contenido += "´."+ fruits[i]
;}

let lista1 = document.getElementById("lista1");
lista1.innerHTML = contenido;
console.log(lista1);
console.warn("La fruita es ", fruits);
console.error("La fruita es ", fruits);
console.info("La fruita es ", fruits);
console.table( fruits);
console.debug("La fruita es ", fruits)

let lista2 = document.getElementById("lista2");
lista2.innerHTML= fruits.join("-----");

let lista3 =document.getElementById("lista3");
fruits.pop(); // Elimina el ultimo elemento
fruits.pop();
console.log(fruits)
lista3.innerHTML = "Lista3:" + fruits.join("__")

let lista4 =document.getElementById("lista4");
fruits.push("Mango");
fruits.push("Fresa");
lista4.innerHTML = "Lista4:" + fruits.join("__")

let lista5 =document.getElementById("lista5");
fruits.shift();
console.log(fruits)
lista5.innerHTML = "Lista5:" + fruits.join("__")

let lista6 =document.getElementById("lista6");
fruits.unshift("pera");
fruits.unshift("Uva");
console.log(fruits)
lista6.innerHTML = "lista6:" + fruits.join("__")

const nombreMujeres = ["dennim","Full of grace", "chula mula" ]
const NombreHombre = ["Hugo","Fuce", "luis" ]

let listNombres = nombreMujeres.concat(NombreHombre);
console.log(listNombres);
console.log(listNombres);
let lista7 = document.getElementById("lista7");
lista7.innerHTML = "Lista de nombres:" + listNombres.join(" , ");