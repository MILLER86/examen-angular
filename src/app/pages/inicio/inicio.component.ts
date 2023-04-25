import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre='Miler ';
apellido='Villegas';
pantallaexamenVisible = false;

constructor(private ruta: Router ){

}

visualizarpantallaexamen(){
    //codigo pantallaexamen
      this.pantallaexamenVisible = true;
      setTimeout(() => {
        this.pantallaexamenVisible = false;
      }, 2000);
    }
      irTablaPokemon(){
      this.ruta.navigate(['tablaPokemon']);
      }
}


