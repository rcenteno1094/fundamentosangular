import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    standalone: false,
    templateUrl: './segundocomponent.html',
    styleUrl: './segundocomponent.css'
})

export class SegundoComponent implements OnInit {
    nombre: string
    diasemana: string;
    numero: number
    constructor() {
        this.nombre = "Alumno"
        this.diasemana = "Hoy es lunes"
        this.numero = 20
    }
    ngOnInit() { }
}