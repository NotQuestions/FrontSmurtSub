import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './components/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {DemoMaterialModule} from '../../components/app/material-modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng5SliderModule} from 'ng5-slider';
import {FilterComponent} from './childe/components/filter/filter.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [MainComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    MatNativeDateModule,
    RouterModule
  ]
})
export class MainModule {
}
