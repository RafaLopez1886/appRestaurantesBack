import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/restaurante.model';
import { RestaurantesCreadosComponent } from 'src/app/modules/mostrandoRestaurantes/restaurantes-creados/restaurantes-creados.component';
import { AppComponent } from 'src/app/app.component';
import { DataServices } from 'src/app/data.services';
import { RestaurantesServices } from 'src/app/restaurantes.services';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';


@Component({
  providers: [AppComponent],
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css'],
})
export class PageNewComponent {

  crearRestaurante: FormGroup;
  

  constructor(
    private comp: AppComponent,
    private fb: FormBuilder,
    private _RestauranteService: RestaurantesServices
  ) {
    this.crearRestaurante = this.fb.group({
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      direccion: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  nuevoRestauranteBBDD() {
    const unRestaurante: any = {
      nombre: this.crearRestaurante.value.nombre,
      descripcion: this.crearRestaurante.value.descripcion,
      direccion: this.crearRestaurante.value.direccion,
      url: this.crearRestaurante.value.url,
    };
    this._RestauranteService.guardarRestaurante(unRestaurante).then(
      () => {
        console.log('Restaurante enviado a Base de Datos');
      },
      (error) => {
        console.log('Sucedió un error');
      }
    );
  }
}
