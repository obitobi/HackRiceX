import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from './product/product.service';
import {AppRoutingModule} from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BasketComponent,
    ProductComponent,
    OrderComponent,
    MainPageComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
