import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [ngStyle]="{ 'font-size': tamano + 'px', 'color': 'red' }">Hola Mundo... esta es una etiqueta</p>
    <p [style.fontSize]="'40px'">Hola Mundo... esta es una etiqueta</p>
    <p [style.fontSize.px]="tamano">Hola Mundo... esta es una etiqueta</p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <!-- Font awesome -->
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <!-- Font awesome -->
    <i class="fa fa-minus"></i>
  </button>
  `,

  styles: []
})
export class NgStyleComponent implements OnInit {

  // Propiedad de tamaño
  tamano: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
