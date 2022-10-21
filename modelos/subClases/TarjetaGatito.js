import { Tarjeta } from "./Tarjeta.js";

class TarjetaGatito extends Tarjeta{

    #juguetePreferido;

    constructor(titulo, descripcion, imagen, jueguetePreferido){
        super(titulo, descripcion, imagen);
        this.#juguetePreferido = jueguetePreferido;
    }
    generarHtml(){
        return `
            <div class="card tarjeta-gatito" style="width: 18rem;">
                <img src="${this._imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.#juguetePreferido}</h5>
                    <h5 class="card-title">${this._titulo}</h5>
                    <p class="card-text">${this._descripcion}</p>
                    <a href="#" class="btn btn-primary">Adoptar</a>
                </div>
            </div>
        `;
    }

}

export  {TarjetaGatito};