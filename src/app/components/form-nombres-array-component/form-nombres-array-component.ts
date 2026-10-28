import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-nombres-array-component',
  standalone: false,
  styleUrl: './form-nombres-array-component.css',
  templateUrl: './form-nombres-array-component.html',
})
export class FormNombresArrayComponent {
  @ViewChild('inputname') inputname!: ElementRef;
  arr: string[];
  constructor() {
    this.arr = [];
  }
  handleNames(): void {
    this.arr.push(this.inputname.nativeElement.value);
  }
}
