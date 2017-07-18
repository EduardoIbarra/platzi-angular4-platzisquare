import { Injectable } from "@angular/core";

@Injectable()
export class LugaresService {
    lugares = [
        {nombre: 'Cafetería la Esperanza', descripcion: 'El mejor pan y café de Platzi York!', plan: 'pagado'},
        {nombre: 'Restaurant el Rincón', descripcion: 'Ven a probar nuestras tortas!', plan: 'pagado'},
        {nombre: 'Zapatería el Dorado', descripcion: 'Lo mejor en calzado para dama', plan: 'gratis'}
    ];
    public get() {
        return this.lugares;
    };
}