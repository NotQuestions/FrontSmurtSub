import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationRoutingModule} from './registration-routing.module';
import {RegistrationComponent} from './components/registration.component';
import {RegistrationService} from './services/registration.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RegistrationComponent],
  exports: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RegistrationService]
})
export class RegistrationModule {
}
