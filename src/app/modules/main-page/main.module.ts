import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ComponentsComponent } from './components/components.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [ComponentsComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
