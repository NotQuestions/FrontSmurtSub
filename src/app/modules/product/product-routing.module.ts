import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '../main-page/components/main.component';
import {ProductComponent} from './components/product.component';
import {AccountInfoComponent} from '../profile/childe.component/account-info/account-info.component';
import {AccountSecuritySettingsComponent} from '../profile/childe.component/account-settings/account-security-settings.component';
import {FilterComponent} from '../main-page/childe/filter/filter.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
