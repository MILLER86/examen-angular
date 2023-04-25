import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pantallaexamen',
  templateUrl: './pantallaexamen.component.html',
  styleUrls: ['./pantallaexamen.component.css']
})
export class PantallaExamenComponent {
  @Input() visible!: boolean;

}