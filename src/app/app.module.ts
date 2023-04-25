import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './components/pantallaexamen/pantallaexamen.component';
import { ButtonModule } from 'primeng/button'; //nuevo boton 


//nuevos

import { InicioComponent } from './pages/inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
