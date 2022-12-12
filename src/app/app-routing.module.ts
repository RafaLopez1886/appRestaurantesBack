import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PageRestaurantsComponent } from './modules/pages/page-restaurants/page-restaurants.component';
import { PageNewComponent } from './modules/pages/page-new/page-new.component';
import { PageSearchComponent } from './modules/pages/page-search/page-search.component';
import { AppComponent } from './app.component';
import { PageRestaurantsComponent } from './modules/pages/page-restaurants/page-restaurants.component';

const routes: Routes = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path: 'restaurants', component: PageRestaurantsComponent},
  {path: 'new', component: PageNewComponent},
  {path: 'search', component: PageSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
