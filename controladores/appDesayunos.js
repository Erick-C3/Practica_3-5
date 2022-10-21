import { ContenedorTarjetasDesayuno } from "../modelos/subClases/ContenedorTarjetaDesayuno.js";
import { menuDesayunos } from "../pseudoBD/menuDesayuno.js";

const unContenedorTarjetas = new ContenedorTarjetasDesayuno("#contenedor-cards");

/* unContenedorTarjetas.setIdContenedor("#contenedor-cards"); */

unContenedorTarjetas.agregarTarjetasALaAppCon(menuDesayunos);



/* const unaTarjeta = new Tarjeta(
    unDesayuno.getNombre(),
    unDesayuno.getTipoPreparacion(),
    unDesayuno.getFoto()
); */



/* console.log(  menuDesayunos  ); */

/* proxima clase 
const vectorTarjetas = [unaTarjeta,otraTarjeta,tresTarjeta,cuatroTarjeta,unaTarjeta]
 */

/* let tarjetasGeneradas = ``;

for (let i = 0; i < 200; i++) {
   tarjetasGeneradas += `
    <div class="col" >
        ${unaTarjeta.generarHtml()}
    </div>
   `
} */

/* document.querySelector("#contenedor-cards").innerHTML =`
    <div class="row">
        ${tarjetasGeneradas}
    </div>
`; */



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