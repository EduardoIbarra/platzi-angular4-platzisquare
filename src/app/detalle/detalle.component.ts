import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {ActivatedRoute} from "@angular/router";
import {LugaresFirebaseService} from "../services/lugares.firebase.service";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
    lugar = null;
    id = null;
    constructor(private lugaresFirebaseService: LugaresFirebaseService, private route:ActivatedRoute){
        this.id = this.route.snapshot.params['id'];
        this.lugaresFirebaseService.getLugar(this.id)
            .subscribe(lugar => {
                this.lugar = lugar;
            });
    }
}
