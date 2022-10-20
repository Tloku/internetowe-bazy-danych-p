import { Component, OnInit } from "@angular/core";
import { timeout } from "rxjs";


interface LatLng {
    lat: number;
    lng: number;
}

@Component({
    selector: 'app-gmap',
    templateUrl: './g-map.component.html',
    styleUrls: ['./g-map.component.scss']
})
export class GMapComponent implements OnInit{
    mapNotSupportedMessage: string = "Nie udało się załadować mapy";  
    locationNotSupported: boolean = false;
    public mapOptions: any;
    private latLng: LatLng = {
        lat: 0,
        lng: 0
    };

    constructor() {}
   
    ngOnInit(): void {
        if(!navigator.geolocation) {
            this.locationNotSupported = true;
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latLng.lat = position.coords.latitude;
                this.latLng.lng = position.coords.longitude;
                console.log(this.latLng)
            });
            this.watchPosition();
        }
    }


    watchPosition() {
        navigator.geolocation.watchPosition((position) => {
            this.latLng.lat = position.coords.latitude;
            this.latLng.lng = position.coords.longitude;
            console.log(this.latLng);
        },
        (error) => {
            console.log(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
        
        )
    }
}