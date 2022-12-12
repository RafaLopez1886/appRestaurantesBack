import { Component } from '@angular/core';
import { Restaurante } from './restaurante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'appRestaurantes';
  restaurantesPrueba: Restaurante[] = [
    
    new Restaurante(
      'Pacífico Mar',
      'Deliciosa comida de mar',
      'Av. 85 Nro 45 - 85 Barranquilla',
      'https://media-cdn.tripadvisor.com/media/photo-s/0c/30/d5/57/restaurant-la-mar-del.jpg'
    ), new Restaurante(
      "Italiano 65",
      "Deliciosa comida italiana",
      "Av. 45 Nro 1 - 85 Medellín",
      "https://media-cdn.tripadvisor.com/media/photo-s/0c/16/aa/0c/restaurante-famiglia.jpg"
    )
    
  ];
}
