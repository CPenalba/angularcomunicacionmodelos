import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coche',
  templateUrl: './padre-coche.component.html',
  styleUrl: './padre-coche.component.css',
})
export class PadreCocheComponent {
  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche('Ford', 'Mustang', 0, 25, false),
      new Coche('Volkswagen', 'Escarabajo', 0, 10, false),
      new Coche('Laborghini', 'Diablo', 0, 35, false),
    ];
  }
}
