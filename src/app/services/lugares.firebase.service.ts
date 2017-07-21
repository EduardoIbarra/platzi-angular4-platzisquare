import { Injectable } from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class LugaresFirebaseService {
    constructor(public afDB: AngularFireDatabase){}
    public store = (lugar) => {
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    };
    public getLugares(){
        return this.afDB.list('lugares/');
    }
    public getLugar(id){
        return this.afDB.object('lugares/'+id);
    }
}