import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { Postre } from "./Postre.js";
import { Tarjeta } from "./Tarjeta.js";

class ContenedorTarjetaPostres extends ContenedorTarjetas{

    /**
     * 
     * @param {Postre} info 
     * @returns 
     */
    crearTarjetaCon(info){
        return new Tarjeta(
            info.getNombre(),
            info.getTipoContenido(),
            info.getImagen()
        );
    }
}


export {ContenedorTarjetaPostres};