import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule
  ]
})
export class ProductModule { }
