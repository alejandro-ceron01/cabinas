import { Component, OnInit } from '@angular/core';
import { CabinasService } from '../servicios/cabinas.service';
@Component({
  selector: 'app-cabina1',
  templateUrl: './cabina1.page.html',
  styleUrls: ['./cabina1.page.scss'],
})

export class Cabina1Page implements OnInit {
  private tiempoInicial: number;
  public precio : number = 0;
  public numLlamada : number = 0;

  constructor() { this.tiempoInicial = 0}

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
    if (this.precio < 200){
      this.precio = 200;
      this.tiempoInicial = 0;
    }
    this.numLlamada++;
    this.agregarLlamada(tiempoTranscurrido, this.precio , this.numLlamada)
    console.log(CabinasService.llamada);
  }

  agregarLlamada( duracion:number, precio:number , numllamadas:number) {
    const llamada = {
      numllamadas,
      duracion,
      precio
    };
    CabinasService.llamada.push(llamada);
  }

}
