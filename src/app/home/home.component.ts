import { Component } from '@angular/core';
import {LugaresFirebaseService} from "../services/lugares.firebase.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
    lugares = [];
    constructor(private lugaresFirebaseService: LugaresFirebaseService){
        lugaresFirebaseService.getLugares()
            .subscribe( lugares => {
                this.lugares = lugares;
            });
    }
}
