import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { Desayuno } from "./Desayuno.js";
import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetasDesayuno extends ContenedorTarjetas{ 

    // sobreescritura
    /* agregarInfoALasTarjetas(listaContenido){
        for (let i = 0; i < listaContenido.length; i++) {
            this._tarjetas.push(
                new Tarjeta(
                    listaContenido[i].getNombre(),
                    listaContenido[i].getTipoPreparacion(),// .getTipoPreparacion();
                    listaContenido[i].getFoto()
                )
            );        
        }
    } */

    /**
     * Construye una tarjeta con desayuno
     * @param {Desayuno} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
    crearTarjetaCon(info){
        return new Tarjeta(
            info.getNombre(),
            info.getTipoPreparacion(),// .getTipoPreparacion();
            info.getFoto()
        )
    }
}


export { ContenedorTarjetasDesayuno };