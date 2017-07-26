import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "@agm/core";
import {ResaltarDirective} from "./directives/resaltar.directive";
import {DetalleComponent} from "./detalle/detalle.component";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LugaresService} from "./services/lugares.service";
import {CrearComponent} from "./crear/crear.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireAuthModule} from "angularfire2/auth/auth.module";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import {AngularFireModule} from "angularfire2";
import {LugaresFirebaseService} from "./services/lugares.firebase.service";
import {LinkifyPipe} from "./pipes/linkify.pipe";
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'detalle/:id', component: DetalleComponent},
    {path:'crear', component: CrearComponent},
    {path:'registro', component: RegistroComponent},
    {path:'login', component: LoginComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyC6MbR328WjlqH3fLQAQobLnjMbu9qcPvs",
    authDomain: "platzi-square-pre.firebaseapp.com",
    databaseURL: "https://platzi-square-pre.firebaseio.com",
    storageBucket: "platzi-square-pre.appspot.com",
    messagingSenderId: "674455763272"
};

@NgModule({
    declarations: [
        AppComponent,
        ResaltarDirective,
        HomeComponent,
        DetalleComponent,
        CrearComponent,
        LinkifyPipe,
        RegistroComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAEu3rZEeKPx_EKHOVPSP-oarnzMxQwMSo'
        }),
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [LugaresService, LugaresFirebaseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
