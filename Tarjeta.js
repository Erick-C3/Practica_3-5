class Tarjeta{
    #titulo = "def titulo";
    #imagen = "def imagen";
    #descripcion = "def descripcion";
    #nombreBoton = "def nombreBoton";

    /**
     * Construye un objeto Tarjeta
     * @param {String} titulo de la tarjeta
     * @param {String} descripcion de la tarjeta
     * @param {String} imagen de la tarjeta URl
     */
    constructor(titulo, descripcion, imagen){
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
    }

    /**
     * Construye una tarjeta en html con la informacion disponible
     * @returns el html de la tarjeta construida
     */
    generarHtml(){
        return `
            <div class="card" style="width: 18rem;">
                <img src="${this.#imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.#titulo}</h5>
                    <p class="card-text">${this.#descripcion}</p>
                    <a href="#" class="btn btn-primary">Adoptar</a>
                </div>
            </div>
        `;
    }

}

export {Tarjeta};