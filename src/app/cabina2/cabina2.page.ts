import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabina2',
  templateUrl: './cabina2.page.html',
  styleUrls: ['./cabina2.page.scss'],
})
export class Cabina2Page implements OnInit {
  private tiempoInicial: number;
  public precio : number = 0;
  constructor() { this.tiempoInicial = 0;}

  ngOnInit() {
  }

  iniciar() {
    console.log("hola");
    this.tiempoInicial = Date.now();
  }

  obtenerTiempoTranscurrido() {
    const tiempoActual = Date.now();
    const tiempoTranscurrido = tiempoActual - this.tiempoInicial;
    console.log(tiempoTranscurrido);
    this.precio = Math.round(((tiempoTranscurrido/1000)/60) * 200);
  }

}
