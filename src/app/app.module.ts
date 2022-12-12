import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './modules/menu-superior/menu-superior.component';
import { PageRestaurantsComponent } from './modules/pages/page-restaurants/page-restaurants.component';
import { RestaurantesCreadosComponent } from './modules/mostrandoRestaurantes/restaurantes-creados/restaurantes-creados.component';
import { RestaurantesEncontradosComponent } from './modules/mostrandoRestaurantes/restaurantes-encontrados/restaurantes-encontrados.component';
import { PageNewComponent } from './modules/pages/page-new/page-new.component';
import { PageSearchComponent } from './modules/pages/page-search/page-search.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataServices } from './data.services';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { fireba } from 'angularfire2'; 


@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    PageRestaurantsComponent,
    RestaurantesCreadosComponent,
    RestaurantesEncontradosComponent,
    PageNewComponent,
    PageSearchComponent,
  ],
  imports: [
   // FirebaseApp,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
