import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
 
  constructor( private dbzService:DbzService){

  }
  
  get listaPersonajes() {
    return this.dbzService.listaPersonajes;
  }

  
}
