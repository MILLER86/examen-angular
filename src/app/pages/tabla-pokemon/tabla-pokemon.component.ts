import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-pokemon',
  templateUrl: './tabla-pokemon.component.html',
  styleUrls: ['./tabla-pokemon.component.css']
})
export class TablaPokemonComponent {
  
  constructor(private rutas: Router){

  }

regresarInicio(){
  this.rutas.navigate(['inicio']);
}

}
