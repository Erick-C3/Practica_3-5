class Desayuno{
    #nombre = "def nombre";
    #tipoPreparacion = "def preparacion";
    #foto = "def foto";
    #precio;

    /**
     * Inicializa los estados del objeto Desayuno
     * @param {String} nombre del desayuno
     * @param {String} tipoPreparacion del desayuno
     * @param {String} foto url del desayuno
     * @param {Number} precio del desayuno
     */
    constructor(nombre, tipoPreparacion, foto, precio = "error"){
        this.#nombre = nombre;
        this.#tipoPreparacion = tipoPreparacion;
        this.#foto = foto;
        this.#precio = precio;
    }

    getNombre(){
        return this.#nombre;
    }

    getTipoPreparacion(){
        return this.#tipoPreparacion;
    }

    getFoto(){
        return this.#foto;
    }

    getPrecio(){
        return this.#precio;
    }
}

export {Desayuno};