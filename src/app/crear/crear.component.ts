import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {LugaresFirebaseService} from "../services/lugares.firebase.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {Http} from "@angular/http";

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
        website: null,
        calle: null,
        ciudad: null,
        estado: null,
        pais: null,
        codigo_postal: null
    };
    results$: Observable<any>;
    private searchField: FormControl;
    constructor(private lugaresFirebaseService: LugaresFirebaseService, private _http: Http){
        const URL = 'http://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges
            .switchMap(query => this._http.get(`${URL}?address=${query}`))
            .map(res => res.json())
            .map(res => res.results);
    }
    onSave(){
        var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.estado+','+this.lugar.pais+','+this.lugar.codigo_postal;
        direccion = direccion.replace(/ /g , "+");
        this.lugaresFirebaseService.getLatLonDesdeDireccion(direccion)
            .subscribe((result)=>{
                this.lugar.lat = result.json().results[0].geometry.location.lat;
                this.lugar.lon = result.json().results[0].geometry.location.lng;
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
                    website: null,
                    calle: null,
                    ciudad: null,
                    estado: null,
                    pais: null,
                    codigo_postal: null
                };
            },
            (error)=>{
                console.log(error);
            });
    }
}
