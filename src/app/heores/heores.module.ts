import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeoreComponent } from './heore/heore.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeoreComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports: [
        CommonModule
        // BrowserModule,

    ]

})

export class HeoresModule{

}