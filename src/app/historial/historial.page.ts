import { Component, OnInit } from '@angular/core';
import { CabinasService } from '../servicios/cabinas.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  mostrar(){
    return CabinasService.llamada;
  }

}
