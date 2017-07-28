import { Injectable } from "@angular/core";
import {Headers, Http} from "@angular/http";

@Injectable()
export class LugaresService {
    API_ENDPOINT = 'https://platzi-square-pre.firebaseio.com';
    constructor (private http: Http ){}
    public get() {
        return this.http.get(this.API_ENDPOINT+'/.json')
            .map((response) => {
                const data = response.json().lugares;
                return data;
            })
    };
    public store = (lugar) => {
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/lugares.json',
            lugar,
            {headers:headers});
    };
    public find(id) {
        /*return this.lugares.filter((l) => {
            return l.id == id;
        })[0];*/
    };
}