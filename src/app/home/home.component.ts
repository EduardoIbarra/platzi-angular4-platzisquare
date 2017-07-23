import { Component } from '@angular/core';
import {LugaresFirebaseService} from "../services/lugares.firebase.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    lat: number = 23.7409928;
    lng: number = -99.1783574;
    lugares = [];
    zoom = 12;
    styles = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#004358"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f8a70"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f8a70"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fd7400"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f8a70"
                },
                {
                    "lightness": -20
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f8a70"
                },
                {
                    "lightness": -17
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "visibility": "on"
                },
                {
                    "weight": 0.9
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f8a70"
                },
                {
                    "lightness": -10
                }
            ]
        },
        {},
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f8a70"
                },
                {
                    "weight": 0.7
                }
            ]
        }
    ];
    constructor(private lugaresFirebaseService: LugaresFirebaseService){
        lugaresFirebaseService.getLugares()
            .subscribe( lugares => {
                this.lugares = lugares;
            });
    }
}
