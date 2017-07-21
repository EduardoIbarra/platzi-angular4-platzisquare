import { Component } from '@angular/core';
import {LugaresFirebaseService} from "../services/lugares.firebase.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    lat: number = 23.7409928;
    lng: number = -99.1783574;
    lugares = [];
    zoom = 13;
    constructor(private lugaresFirebaseService: LugaresFirebaseService){
        lugaresFirebaseService.getLugares()
            .subscribe( lugares => {
                this.lugares = lugares;
            });
    }
}
