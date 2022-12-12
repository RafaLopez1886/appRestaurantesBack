import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { PageNewComponent } from "./modules/pages/page-new/page-new.component";
import { Restaurante } from "./restaurante.model";


@Injectable({

    providedIn:'root'

})

export class RestaurantesServices{

    constructor(private firebase: AngularFirestore){}

        guardarRestaurante(restaurante: Restaurante): Promise<any>{
            return this.firebase.collection('restaurantes').add(restaurante);

            
        
    }

    }