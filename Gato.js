class Gato{
    #nombre;
    #foto;
    /* edad;
    peso; */
    #personalidad;

    constructor(nombre, personalidad, foto){
        this.#nombre = nombre;
        this.#personalidad = personalidad;
        this.#foto = foto;
    }

    getNombre(){
        return this.#nombre;
    }
    getFoto(){
        return this.#foto;
    }
    getPersonalidad(){
        return this.#personalidad;
    }
}

export {Gato};