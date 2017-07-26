import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    credenciales = {
        email: null,
        password: null
    };
    constructor(private autorizacionService: AutorizacionService){
    }
    login(){
        this.autorizacionService.login(this.credenciales.email, this.credenciales.password);
    }
}
