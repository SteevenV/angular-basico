import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heores: string[] = ['Spiderman', 'Iroman', 'hulk', 'Thor'];
  heoresborrados: string = '';

  borrandoHeore(){
    
    const heoresBorrados = this.heores.shift() || '';
    
    this.heoresborrados = heoresBorrados;
    
    // console.log(heoresBorrados);
  }

  
}
