import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResultsEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-tabla-pokemon',
  templateUrl: './tabla-pokemon.component.html',
  styleUrls: ['./tabla-pokemon.component.css']
})
export class TablaPokemonComponent implements OnInit{
  
listaEmpleado: IResultsEmpleado [] = [];

  constructor(private rutas: Router,
       private empleadoService: EmpleadoService){


  }
  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }


  ngOnInit(): void {
    console.log('Examen');
    this.empleadoService.getAllEmployee().subscribe(
           (res) => {
        console.log(res);
        this.listaEmpleado = res.results;
           },(error) =>{
            console.log(error);
           }

           )
        
      }




    

  }

