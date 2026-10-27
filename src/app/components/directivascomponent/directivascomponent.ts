import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  standalone: false,
  styleUrl: './directivascomponent.css',
  templateUrl: './directivascomponent.html',
})
export class DirectivasComponent implements OnInit {
  deportes: string[]
  constructor() {
    this.deportes = ["furbol", "chess", "counter", "curling"]
  }
  ngOnInit(): void {

  }
}
