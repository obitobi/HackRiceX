import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasketComponent} from './basket/basket.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'basket', component: BasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
