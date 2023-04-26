import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './components/pantallaexamen/pantallaexamen.component';

import { ButtonModule } from 'primeng/button'; //nuevo boton 
import { TableModule } from 'primeng/table'; //tabla


//nuevos

import { InicioComponent } from './pages/inicio/inicio.component';
import { TablaPokemonComponent } from './pages/tabla-pokemon/tabla-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent,
    InicioComponent,
    TablaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
