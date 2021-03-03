import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  filters: string[] = [
    'filter1', 'filter2', 'filter3'
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  navigate(link: string): void {
    this.router.navigate(['/' + link]);
  }
}
