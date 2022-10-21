import { Tarjeta } from "../superClases/Tarjeta.js";

class TarjetaDesayuno extends Tarjeta{
    #precio;

    constructor(titulo, descripcion, imagen, precio = "$error"){
        super(titulo, descripcion, imagen);
        this.#precio = precio;
    }
    
    generarHtml(){
        return `
            <div class="card tarjeta-desayunos" style="width: 18rem;">
                <img src="${this._imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this._titulo}</h5>
                    <p class="card-text">${this._descripcion}</p>
                    <h5 class="card-title">$${this.#precio}</h5>

                    <a href="#" class="btn btn-primary">Pedir</a>
                </div>
            </div>
        `;
    }

}

export  {TarjetaDesayuno};