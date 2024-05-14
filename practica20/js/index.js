let resultado = document.getElementById('resultado');

let asignar =  (valor) => Sresultado.value += valor;


function calcular(){
    if(resultado.value != '')
        resultado.value = eval(resultado.value);
    else
    alert('add number')
}

let limpiar = () => resultado.value = '';



// Reto Hacer la Calculadora scientifica --- 3 operaciones Con Historia

