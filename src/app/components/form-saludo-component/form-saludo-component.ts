import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-saludo-component',
  standalone: false,
  styleUrl: './form-saludo-component.css',
  templateUrl: './form-saludo-component.html',
})
export class FormSaludoComponent {
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  mensaje: string;
  constructor() {
    this.mensaje = '';
  }
  mostrarSaludo(): void {
    let nombre = this.cajanombre.nativeElement.value;
    this.mensaje = 'Hoy es miercoles, ' + nombre;
  }
}
