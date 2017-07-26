import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent {
    credenciales = {
        email: null,
        password: null
    };
    constructor(private autorizacionService: AutorizacionService){
    }
    registro(){
        this.autorizacionService.registro(this.credenciales.email, this.credenciales.password);
    }
}
