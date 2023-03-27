import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'cabina1', url: '/cabina1', icon: 'person' },
    { title: 'historial', url: '/historial', icon: 'book' },
  ];

  constructor() {}
}
