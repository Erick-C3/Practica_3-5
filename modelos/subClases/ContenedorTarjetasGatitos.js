import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { Gato } from "./Gato.js";
import { TarjetaGatito } from "./TarjetaGatito.js";

class ContenedorTarjetaGatitos extends ContenedorTarjetas{ 

    /* agregarInfoALasTarjetas(listaContenido){
        for (let i = 0; i < listaContenido.length; i++) {
            this._tarjetas.push(
                new Tarjeta(
                    listaContenido[i].getNombre(),
                    listaContenido[i].getPersonalidad(),// .getTipoPreparacion();
                    listaContenido[i].getFoto()
                )
            );        
        }
    } */

    /**
     * Construye una tarjeta con desayuno
     * @param {Gato} info para construir la tarjeta
     * @returns tarjeta construida con la info
     */
     crearTarjetaCon(info){
        return new TarjetaGatito(
            info.getNombre(),
            info.getPersonalidad(),// .getTipoPreparacion();
            info.getFoto(),
            "un juguete"
        )
    }
 }

export { ContenedorTarjetaGatitos};