import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    lugares = [
        {nombre: 'Cafetería la Esperanza', descripcion: 'El mejor pan y café de Platzi York!', plan: 'pagado'},
        {nombre: 'Restaurant el Rincón', descripcion: 'Ven a probar nuestras tortas!', plan: 'pagado'},
        {nombre: 'Zapatería el Dorado', descripcion: 'Lo mejor en calzado para dama', plan: 'gratis'}
    ];
    lat: number = 51.678418;
    lng: number = 7.809007;
}
