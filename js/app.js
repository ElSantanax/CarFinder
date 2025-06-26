const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
    llenarSelect();
})

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const autoHTML = document.createElement('P');
        const { marca, modelo, year, precio, puertas, color, transmision } = auto

        autoHTML.textContent = `
            ${marca}, ${modelo} - ${year} - ${puertas} Puerta - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}