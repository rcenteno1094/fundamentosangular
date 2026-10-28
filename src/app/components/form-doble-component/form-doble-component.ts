import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-doble-component',
  standalone: false,
  styleUrl: './form-doble-component.css',
  templateUrl: './form-doble-component.html',
})
export class FormDobleComponent {
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  num: number;
  constructor() {
    this.num = 0;
  }
  mostrarDoble(): void {
    let num = Number(this.cajanumero.nativeElement.value);
    this.num = num * 2;
  }
}
