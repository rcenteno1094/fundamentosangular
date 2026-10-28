import { Component } from '@angular/core';

@Component({
  selector: 'app-numerosestilos',
  standalone: false,
  styleUrl: './numerosestiloscomponent.css',
  templateUrl: './numerosestiloscomponent.html',
})
export class NumerosEstilosComponent {
  num: number[];
  constructor() {
    this.num = [0, 1, 2, 3, 4, 5, 6];
  }
  generateRnd(): void {
    let rnd = Math.floor((Math.random() * 100 + 1));
    this.num.push(rnd);
  }
}
