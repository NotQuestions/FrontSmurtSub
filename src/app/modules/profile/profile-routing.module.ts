import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {AccountInfoComponent} from './childe.component/account-info/account-info.component';
import {AccountSecuritySettingsComponent} from './childe.component/account-settings/account-security-settings.component';


const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      {path: 'account_info', component: AccountInfoComponent},
      {path: 'account_security_settings', component: AccountSecuritySettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
