import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre='Miler ';
apellido='Villegas';
pantallaexamenVisible = false;


visualizarpantallaexamen(){
    //codigo pantallaexamen
      this.pantallaexamenVisible = true;
      setTimeout(() => {
        this.pantallaexamenVisible = false;
      }, 2000);

}

}
