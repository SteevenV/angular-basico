import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
// import { HeoreComponent } from './heores/heore/heore.component';
// import { ListadoComponent } from './heores/listado/listado.component';
import { HeoresModule } from './heores/heores.module';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    // HeoreComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeoresModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
