import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './pages/productsPage/productsPage.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [ProductsRoutingModule],
  declarations: [ProductsPageComponent],
  providers: [],
})
export class ProductsModule { }


