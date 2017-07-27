import { Injectable } from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";

@Injectable()
export class AutorizacionService {
    constructor(private angularFireAuth: AngularFireAuth, private router: Router){
        this.isLogged();
    }
    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                this.router.navigate(['/login']);
                alert('Registrado Correctamente');
                console.log(response);
            })
            .catch((error) => {
                alert('Ocurrió un error');
                console.log(error);
            });
    };
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                this.router.navigate(['/']);
                alert('Loggeado Correctamente');
                console.log(response);
            })
            .catch((error) => {
                alert('Ocurrió un error');
                console.log(error);
            });
    };
    public logout(){
        this.angularFireAuth.auth.signOut();
    }
    public isLogged(){
         return this.angularFireAuth.authState
    }
}