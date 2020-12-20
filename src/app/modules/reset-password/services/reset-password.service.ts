import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private httpClient: HttpClient) {
  }

  resetPasswordOrLogin(email: string): void {
    console.log('Відправляєм повідомлення на електрону пошту для відновлення Логіну та Пароля');
    // this.httpClient.post("",email);
  }
}
