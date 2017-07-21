import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Http} from "@angular/http";

@Injectable()
export class LugaresFirebaseService {
    constructor(public afDB: AngularFireDatabase, private http: Http){}
    public store = (lugar) => {
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    };
    public getLugares(){
        return this.afDB.list('lugares/');
    }
    public getLugar(id){
        return this.afDB.object('lugares/'+id);
    }
    public getLatLonDesdeDireccion(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
}