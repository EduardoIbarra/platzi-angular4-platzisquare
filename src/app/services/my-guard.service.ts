import {CanActivate} from "@angular/router";
import {AutorizacionService} from "./autorizacion.service";
import {Injectable} from "@angular/core";

@Injectable()
export class MyGuard implements CanActivate{
    loggedIn = false;
    constructor(private autorizacionService: AutorizacionService){
        autorizacionService.isLogged()
            .subscribe((result) => {
                if(result && result.uid){
                    this.loggedIn = true;
                }else{
                    this.loggedIn = false;
                }
            }, (error) => {
                this.loggedIn =  false;
            });
    }
    canActivate(){
        return this.loggedIn;
    }
}