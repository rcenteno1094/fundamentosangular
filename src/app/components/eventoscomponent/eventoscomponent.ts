import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    standalone: false,
    styleUrl: './eventoscomponent.css',
    templateUrl: './eventoscomponent.html'
})

export class EventosComponent implements OnInit {
    mensaje: string
    constructor() {
        this.mensaje = "Hoy es martes!!!"
    }
    cambiarMensaje(): void {
        this.mensaje = "y mañana miércoles!!!!"
    }
    ngOnInit() {
        console.log("Soy On Init");
    }

    ngDoCheck(): void{
        console.log("Soy Do Check");
    }
}