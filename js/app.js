const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})

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