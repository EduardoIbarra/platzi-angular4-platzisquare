import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lugares = [
    {nombre: 'Cafetería la Esperanza', descripcion: 'El mejor pan y café de Platzi York!'},
    {nombre: 'Restaurant el Rincón', descripcion: 'Ven a probar nuestras tortas!'},
    {nombre: 'Zapatería el Dorado', descripcion: 'Lo mejor en calzado para dama'}
  ];
}
