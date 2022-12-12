import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RestaurantesCreadosComponent }  from 'src/app/modules/mostrandoRestaurantes/restaurantes-creados/restaurantes-creados.component'
import { Restaurante } from "./restaurante.model";


@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    guardarRestaurantes(restaurantes: Restaurante[]){
        this.httpClient.post('https://apprestaurantes-b6bb7-default-rtdb.firebaseio.com/datos.json', restaurantes)
        .subscribe(
            response => {
                console.log("resultado " + response);
            }, 
            error => console.log("Error " + error)
        );
    }

}