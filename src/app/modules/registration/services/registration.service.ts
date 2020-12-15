import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/User.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }


  getUsers(): Observable<UserModel[]> {
    console.log('Good!');
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
