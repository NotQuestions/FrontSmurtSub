import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  }
  // {
  //   path: 'login',
  //   loadChildren: () => import('../login/login.module').then(moduleFile => moduleFile.LoginModule),
  // },
  // {
  //   path: 'registration',
  //   loadChildren: () => import('../registration/registration.module').then(moduleFile => moduleFile.RegistrationModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
