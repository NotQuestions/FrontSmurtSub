import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './components/app/app.component';
import {MainComponent} from './modules/main-page/components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {
    path: 'registration',
    loadChildren: () => import('./modules/registration/registration.module').then(moduleFile => moduleFile.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
