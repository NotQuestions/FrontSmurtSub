import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './components/profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { AccountSecuritySettingsComponent } from './childe.component/account-settings/account-security-settings.component';
import {AccountInfoComponent} from './childe.component/account-info/account-info.component';
import { AccountHistoryComponent } from './childe.component/account-history/account-history.component';



@NgModule({
  declarations: [ProfileComponent, AccountInfoComponent, AccountSecuritySettingsComponent, AccountHistoryComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatButtonToggleModule
  ]
})
export class ProfileModule { }
