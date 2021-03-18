import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './components/profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonToggleModule
  ]
})
export class ProfileModule { }
