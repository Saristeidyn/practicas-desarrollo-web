let lista = document.getElementById("lista");
let texto = "Hola mi nombre es Saray, y cumplí 20 en noviembre";
console.log(texto);

lista.innerHTML = texto;

texto = "Esta es otra cadena";

lista.innerHTML = texto;

let text = `Cadena multilínea
    Lasalle
    Alumno 301
    Esta semana comienzan los exámenes del 2ndo parcial
    suerte

    Alt + 96 apóstrofo invertido o backtick
    `;

console.log(text);

let a = 5;
let b = 10;

let resultado = `El resultado de la suma de ${a} + ${b} es ${a + b}
<ul>
    <li> Multiplicar ${a * b}</li>
    <li> Dividir ${(a + b) / 2}</li>
    <li> Multiplicar ${a * b}</li>
</ul>`;

console.log(resultado);
lista.innerHTML = resultado;

let persona = 'Pablo';
let edad = 16;

function miFuncion(cadena, personaX, edadExp){
    let resultado = `${cadena} ${personaX} tiene una edad de ${edadExp} años`;
    console.log(resultado);
    return resultado;
}

miFuncion("Nombre:", persona, edad);

// Tagged template literals:
function mostrarNombre(literals, ...values) {
    let result = literals[0];
    for (let i = 0; i < values.length; i++) {
        result += values[i] + literals[i + 1];
    }
    console.log(result);
    return result;
}

let resuluado2 = mostrarNombre`hola mi nombre es Raul`;

let titulo = "Ganadores de los oscars 2024";
let candidatos = ["Billie Eilish", "Lady Gaga", "Adele"];
let cadenaHTML = `<h1>${titulo}</h1>`;

cadenaHTML += `<ul>`;

for (let cantante of candidatos){
    cadenaHTML += `<li>${cantante}</li>`;
}

cadenaHTML += `</ul>`;

lista.innerHTML = cadenaHTML;


