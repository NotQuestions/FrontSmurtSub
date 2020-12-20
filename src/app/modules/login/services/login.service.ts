import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLoginModel} from '../models/UserLogin.model';
import {catchError} from 'rxjs/operators';
import {AppService} from '../../../services/app.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8081/api/auth/login';

  constructor(private httpClient: HttpClient, private appService: AppService) {
  }

  postRequestForLogin(user: UserLoginModel): any {
    // test
    return this.httpClient
      .post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      // .pipe(catchError(this.appService.handleError))
      ;
  }
}
