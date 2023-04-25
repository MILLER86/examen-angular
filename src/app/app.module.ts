import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './components/pantallaexamen/pantallaexamen.component';



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
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
