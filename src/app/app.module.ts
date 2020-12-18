import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RegistrationModule} from './modules/registration/registration.module';
import {MainRoutingModule} from './modules/main-page/main-routing.module';
import { LoginComponent } from './modules/login/login-components/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


//тут всі необхіні імпорти для використання ангулярівських методів таблиць і подібного

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MainRoutingModule,
    RegistrationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
