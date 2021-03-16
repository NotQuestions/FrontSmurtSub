import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './components/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {DemoMaterialModule} from '../../components/app/material-modules';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng5SliderModule} from 'ng5-slider';


@NgModule({
  declarations: [MainComponent],
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
    Ng5SliderModule
  ]
})
export class MainModule {
}
