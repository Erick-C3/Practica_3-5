import { Desayuno } from "./Desayuno.js";
import { Tarjeta } from "./Tarjeta.js";

const unDesayuno = new Desayuno("Café", "cortado", "https://statics-cuidateplus.marca.com/cms/images/cafe-salud.jpg");

const unaTarjeta = new Tarjeta(
    unDesayuno.getNombre(),
    unDesayuno.getTipoPreparacion(),
    unDesayuno.getFoto()
);

/* proxima clase 
const vectorTarjetas = [unaTarjeta,otraTarjeta,tresTarjeta,cuatroTarjeta,unaTarjeta]
 */

let tarjetasGeneradas = ``;

for (let i = 0; i < 10; i++) {
   tarjetasGeneradas += `
    <div class="col">
        ${unaTarjeta.generarHtml()}
    </div>
   `
}

document.querySelector("#contenedor-cards").innerHTML =`
    <div class="row">
        ${tarjetasGeneradas}
    </div>
`;



/* function agregarTarjeta(){
    document.querySelector("#contenedor-cards").innerHTML +=`
    <div class="row">
        <div class="col">
            ${unaTarjeta.generarHtml()}
        </div>
    </div>
    `;
}

for (let i = 0; i < 10; i++) {
    agregarTarjeta();
} */