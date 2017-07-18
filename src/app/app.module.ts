import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "@agm/core";
import {ResaltarDirective} from "./directives/resaltar.directive";
import {DetalleComponent} from "./detalle/detalle.component";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LugaresService} from "./services/lugares.service";

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'detalle', component: DetalleComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ResaltarDirective,
        HomeComponent,
        DetalleComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAEu3rZEeKPx_EKHOVPSP-oarnzMxQwMSo'
        }),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [LugaresService],
    bootstrap: [AppComponent]
})
export class AppModule { }
