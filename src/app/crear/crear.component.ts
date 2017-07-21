import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {LugaresFirebaseService} from "../services/lugares.firebase.service";

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar = {
        id: null,
        nombre: null,
        descripcion: null,
        lat: null,
        lon: null,
        telefono: null,
        website: null
    };
    constructor(private lugaresFirebaseService: LugaresFirebaseService){
    }
    onSave(){
        this.lugar.id = Date.now();
        this.lugaresFirebaseService.store(this.lugar);
        alert('Lugar creado con éxito!');
        this.lugar = {
            id: null,
            nombre: null,
            descripcion: null,
            lat: null,
            lon: null,
            telefono: null,
            website: null
        };
    }
}
