import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './components/profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
// import { AccountInfoComponent } from './childe.component/account-info/account-info.component';
import { AccountSecuritySettingsComponent } from './childe.component/account-settings/account-security-settings.component';
import {AccountInfoComponent} from './childe.component/account-info/account-info.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AccountInfoComponent,
    AccountSecuritySettingsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonToggleModule
  ]
})
export class ProfileModule { }
