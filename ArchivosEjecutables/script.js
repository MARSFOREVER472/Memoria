// DECLARACIÓN DE VARIABLES...

const cartasTotal = 12; // 12 CARTAS EN TOTAL.
const cartasDisponibles = ['A', 'J', 'Q', 'K']; // LETRAS DE LA BARAJA INGLESA.
let cartas = []; // TODAS LAS CARTAS.
let cartasSeleccionadas = []; // SI SE SELECCIONARON LAS CARTAS DENTRO DE LA INTERFAZ.
let valoresUtilizados = []; // SE UTILIZARON VALORES AL MOMENTO DE DESTAPAR CARTAS.
let movimientoActual = 0; // MOVIMIENTO ACTUAL AL DESTAPAR CARTAS.
let intentosActuales = 0; // CANTIDAD DE INTENTOS.

let plantillaCarta = '<div class="card"><div class="back"></div><div class="face"></div></div>';

// CREAREMOS UNA FUNCIÓN MEDIANTE UN ALGORITMO SENCILLO PARA EFECTUAR ACCIONES CON LAS CARTAS...

function activate(e)
{
    if (movimientoActual < 2) // SI LA CANTIDAD DE MOVIMIENTOS SON MENORES QUE 2...
    {

        if ((!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== e.target) && !e.target.classList.contains('active'))
        {
            e.target.classList.add('active');
            cartasSeleccionadas.push(e.target);

            if(++movimientoActual == 2) // SI LA CANTIDAD DE MOVIMIENTOS FUESE 2 O MÁS...
            {
                intentosActuales++;
                document.querySelector('#stats').innerHTML = intentosActuales + ' intentos';
                if(cartasSeleccionadas[0].querySelectorAll('.face')[0].innerHTML == cartasSeleccionadas[1].querySelectorAll('.face')[0].innerHTML)
                {
                    cartasSeleccionadas = [];
                    movimientoActual = 0;
                }

                else // EN CASO CONTRARIO...
                {
                    setTimeout(() => {
                        cartasSeleccionadas[0].classList.remove('active');
                        cartasSeleccionadas[1].classList.remove('active');
                        cartasSeleccionadas = [];
                        movimientoActual = 0;
                    }, 600);
                }
            }
        }
    }
}

// CREAREMOS UNA FUNCIÓN PARA MOSTRAR VALORES ALEATORIOS...

function valorAleatorio()
{
    let rnd = Math.floor(Math.random() * cartasTotal * 0.5);
    let valores = valoresUtilizados.filter(valor => valor === rnd);

    if (valores.length < 2)
    {
        valoresUtilizados.push(rnd);
    }

    else
    {
        valorAleatorio();
    }
}

// CREAREMOS OTRA FUNCIÓN PARA QUE CARTAS TAMBIÉN DISPONGAN DE CARACTERES TÍPICOS DE UNA BARAJA INGLESA...

function getFaceValue(valor)
{
    let rtn = valor;
    
    if (valor < cartasDisponibles.length)
    {
        rtn = cartasDisponibles[valor];
    }

    return rtn;
}

// CICLO "for" PARA CADA CARTA SE GENERAN FIGURAS...

for (let i = 0; i < cartasTotal; i++)
{
    let div = document.createElement('div');
    div.innerHTML = plantillaCarta;
    cartas.push(div);
    document.querySelector('#game').append(cartas[i]);
    valorAleatorio();
    cartas[i].querySelectorAll('.face')[0].innerHTML = getFaceValue(valoresUtilizados[i]);
    cartas[i].querySelectorAll('.card')[0].addEventListener('click', activate);
}