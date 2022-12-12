import { Component, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Restaurante } from 'src/app/restaurante.model';
import { PageNewComponent } from '../../pages/page-new/page-new.component';

@Component({
  providers:[AppComponent],
  selector: 'app-restaurantes-creados',
  templateUrl: './restaurantes-creados.component.html',
  styleUrls: ['./restaurantes-creados.component.css']
})
export class RestaurantesCreadosComponent {

  constructor(private comp: AppComponent){
  }
  
  restaurantesMostrar: Restaurante[] = this.comp.restaurantesPrueba.slice();


}
