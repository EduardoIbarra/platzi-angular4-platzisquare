import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar = {
        nombre: null,
        descripcion: null,
        lat: null,
        lon: null,
        telefono: null,
        website: null
    };
    constructor(private lugaresService: LugaresService){
    }
    onSave(){
        this.lugaresService.store(this.lugar)
            .subscribe((result)=>{
                alert('Lugar creado con éxito!');
                console.log(result);
                this.lugar = {
                    nombre: null,
                    descripcion: null,
                    lat: null,
                    lon: null,
                    telefono: null,
                    website: null
                };
            },
            (error)=>console.log(error));
    }
}
