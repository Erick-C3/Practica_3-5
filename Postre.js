class Postre{
    #nombre;
    #tipoContenido;
    #imagen;

    /**
     * Construye un objeto Postre
     * @param {String} nombre del Postre
     * @param {String} tipoContenido del Postre
     * @param {String} imagen del Postre
     */
    constructor(
            nombre  = "def nombre",
            tipoContenido  = "def contenido",
            imagen  = "https://w7.pngwing.com/pngs/591/346/png-transparent-error-cross-red-cross-error.png"
        ){
        this.#nombre = nombre;
        this.#tipoContenido = tipoContenido;
        this.#imagen = imagen;
    }

    getNombre(){
        return this.#nombre;
    }

    getTipoContenido(){
        return this.#tipoContenido;
    }

    getImagen(){
        return this.#imagen;
    }
}

export {Postre};