import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros-component',
  standalone: false,
  styleUrl: './sumar-numeros-component.css',
  templateUrl: './sumar-numeros-component.html',
})
export class SumarNumerosComponent {
  @ViewChild('inputnum1')
  inputnum1!: ElementRef;

  @ViewChild('inputnum2')
  inputnum2!: ElementRef;

  mensaje: string;

  constructor() {
    this.mensaje = '';
  }

  handleSum(): void {
    let num1 = Number(this.inputnum1.nativeElement.value);
    let num2 = Number(this.inputnum2.nativeElement.value);

    this.mensaje = 'El resultado es ' + (num1 + num2);
  }
}
