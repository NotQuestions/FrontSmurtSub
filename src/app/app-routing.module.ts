import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './modules/main-page/components/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(f => f.LoginModule)},
  {path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(f => f.RegistrationModule)},
  {path: 'reset-password', loadChildren: () => import('./modules/reset-password/reset-password.module').then(f => f.ResetPasswordModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
