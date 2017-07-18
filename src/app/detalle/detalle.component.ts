import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
    lugares = [];
    constructor(private lugaresService: LugaresService){
        this.lugares = this.lugaresService.get();
    }
}
