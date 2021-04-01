import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './components/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DemoMaterialModule} from './components/materil-module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    DemoMaterialModule
  ]
})
export class AdminModule { }
