import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    lat: number = 51.678418;
    lng: number = 7.809007;
    lugares:any = [];
    constructor(private lugaresService: LugaresService){
        this.lugaresService.get()
            .subscribe((result) => {
                this.lugares = result;
                var me = this;
                me.lugares = Object.keys(this.lugares).map(function (key) { return me.lugares[key]; });
            },
            (error) => {
                alert('Un error ha ocurrido: ' + error.json().error);
                console.log(error);
            });
    }
}
