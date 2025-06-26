const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelect();
});

// Escuchar por cambios
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

// Funciones
function mostrarAutos(autos) {

    limpiearHTML(); // Elimina el HTML previo

    autos.forEach(auto => {
        const autoHTML = document.createElement('P');
        const { marca, modelo, year, precio, puertas, color, transmision } = auto

        autoHTML.textContent = `
            ${marca}, ${modelo} - ${year} - ${puertas} Puerta - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    });
}

function limpiearHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}

// Funcion de filtar en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtarMaximo).filter(filtrarPuerta).filter(filtarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiearHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros parametros de búsqueda';
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtarMaximo(auto) {
    const { maximo } = datosBusqueda
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuerta(auto) {
    const { puertas } = datosBusqueda
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtarTransmision(auto) {
    const { transmision } = datosBusqueda
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda
    if (color) {
        return auto.color === color;
    }
    return auto;
}
