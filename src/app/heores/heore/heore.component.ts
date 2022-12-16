import { Component } from '@angular/core';

@Component({
    selector: 'app-heore',
    templateUrl: 'heore.component.html'
})
export class HeoreComponent{
    nombre: string = 'Iroman';
    edad: number = 40;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
    }
    
    cambiarEdad(): void{
        this.edad = 25;
    }
}