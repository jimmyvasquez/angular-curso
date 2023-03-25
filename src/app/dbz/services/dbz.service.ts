import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
       
    private _listaPersonajes: Personaje[] = [
      {
        nombre: 'Coku',
        poder: 15000 
      },
      {
          nombre: 'Vegeta',
          poder: 7500 
      }
    ];
  
    get listaPersonajes():Personaje[] {
      return [...this._listaPersonajes];
    }

    constructor(){ }

    agregarPersonaje( personaje : Personaje){
      this._listaPersonajes.push(personaje);
    }
    
}