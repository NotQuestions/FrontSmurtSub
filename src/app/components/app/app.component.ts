import { Component } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filters: string[] = [
    'filter1', 'filter2', 'filter3'
  ];
  constructor(private router: Router) {
  }


  navigate(link: string): void {
    this.router.navigate(['/' + link]);
  }

}
