import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/main-page/main.module').then(f => f.MainModule)},
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(f => f.LoginModule)},
  {path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(f => f.RegistrationModule)},
  {path: 'reset-password', loadChildren: () => import('./modules/reset-password/reset-password.module').then(f => f.ResetPasswordModule)},
  {path: 'product/:botName', loadChildren: () => import('./modules/product/product.module').then(f => f.ProductModule)},
  {path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(f => f.ProfileModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(f => f.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
