// DECLARACIÓN DE VARIABLES...

const cartasTotal = 12; // 12 CARTAS EN TOTAL.
let cartas = []; // TODAS LAS CARTAS.
let cartasSeleccionadas = []; // SI SE SELECCIONARON LAS CARTAS DENTRO DE LA INTERFAZ.
let valoresUtilizados = []; // SE UTILIZARON VALORES AL MOMENTO DE DESTAPAR CARTAS.
let movimientoActual = 0; // MOVIMIENTO ACTUAL AL DESTAPAR CARTAS.

let plantillaCarta = '<div class="card"><div class="back"></div><div class="face"></div></div>';

// CICLO "for" PARA CADA CARTA SE GENERAN FIGURAS...

for (let i = 0; i < cartasTotal; i++)
{
    let div = document.createElement('div');
    div.innerHTML = plantillaCarta;
    cartas.push(div);
    document.querySelector('#game').append(cartas[i]);
}