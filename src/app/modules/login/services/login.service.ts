import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLoginModel} from '../models/UserLogin.model';
import {catchError} from 'rxjs/operators';
import {AppService} from '../../../services/app.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UserRegistrationModel} from '../../registration/models/UserRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private appService: AppService) {
  }

  postRequestForLogin(user: UserLoginModel): Observable<UserLoginModel> {
    // test
    return this.httpClient
      .post<UserLoginModel>(`http://localhost:8080/login`, user)
      // .pipe(catchError(this.appService.handleError))
      ;
  }
}
