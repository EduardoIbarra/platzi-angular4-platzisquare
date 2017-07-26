import { Injectable } from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";

@Injectable()
export class AutorizacionService {
    constructor(private angularFireAuth: AngularFireAuth){}
    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                alert('Registrado Correctamente');
                console.log(response);
            })
            .catch((error) => {
                alert('Ocurrió un error');
                console.log(error);
            });
    };
    public login = (email, password) => {
        console.log('Login!');
    };
}