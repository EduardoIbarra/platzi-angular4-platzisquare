import { Injectable } from "@angular/core";
import {Headers, Http} from "@angular/http";

@Injectable()
export class LugaresService {
    lugares = [
        {id: 1, nombre: 'Cafetería la Esperanza', descripcion: 'El mejor pan y café de Platzi York!', plan: 'pagado'},
        {id: 2, nombre: 'Restaurant el Rincón', descripcion: 'Ven a probar nuestras tortas!', plan: 'pagado'},
        {id: 3, nombre: 'Zapatería el Dorado', descripcion: 'Lo mejor en calzado para dama', plan: 'gratis'}
    ];
    API_ENDPOINT = 'https://platzi-square-pre.firebaseio.com';
    constructor (private http: Http ){}
    public get() {
        return this.lugares;
    };
    public store = (lugar) => {
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/lugares.json',
            lugar,
            {headers:headers});
    }
    public find(id) {
        return this.lugares.filter((l) => {
            return l.id == id;
        })[0];
    };
}