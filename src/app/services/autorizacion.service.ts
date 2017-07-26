import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class AutorizacionService {
    constructor(private afDB: AngularFireDatabase){}
    public registro = (email, password) => {
        console.log('Registrar!');
    };
    public login = (email, password) => {
        console.log('Login!');
    };
}