import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RegistrationModule} from './modules/registration/registration.module';
import {MainRoutingModule} from './modules/main-page/main-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainRoutingModule,
    RegistrationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
