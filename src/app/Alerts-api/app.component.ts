import { Marker } from '@agm/core/services/google-maps-types';
import { Component, OnInit } from '@angular/core';
import { AgmMarker } from '@agm/core';
import { SensoresService } from './services/sensores.services';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SensoresService ],
})
export class AppComponent  {
  constructor(private sensoresService: SensoresService ) { this.alertas(); this.sensores(); }
  zoom: Number = 10;
  // posicion inicial
  lat: Number = 6.144837;
  long: Number = -75.375085;

  sensores() {
    this.sensoresService.getlistsensores().subscribe(res => {
      console.log(res);
    });
   }

  alertas () {
    this.sensoresService.getlistarAlertas().subscribe(res => {
     console.log(res);
    });
  }




