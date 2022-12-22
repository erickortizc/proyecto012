import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre='Erick Jaziel';
    saldo=100.50;
    dias=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    articulos=[
      {
        codigo:1,
        descripcion:"papas",
        precio:23.5
      },
      {
        codigo:2,
        descripcion:"manzanas",
        precio:54
      }
    ];
    fecha_actual=new Date();
}
