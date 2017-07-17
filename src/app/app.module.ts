import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "@agm/core";
import {ResaltarDirective} from "./directives/resaltar.directive";
import {DetalleComponent} from "./detalle/detalle.component";

@NgModule({
    declarations: [
        AppComponent,
        ResaltarDirective,
        DetalleComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAEu3rZEeKPx_EKHOVPSP-oarnzMxQwMSo'
        })
    ],
    providers: [],
    bootstrap: [DetalleComponent]
})
export class AppModule { }
