import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router) {
  }

  // добавити тут шлях до беку і бази
  navigate(path): void {
    this.router.navigate([path]);
  }
}
