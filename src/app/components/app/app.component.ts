import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filters: string[] = [
    'filter1', 'filter2', 'filter3'
  ];

}
