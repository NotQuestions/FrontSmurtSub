import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface Rating {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  stars: Rating[] = [
    {value: '1', viewValue: '1 Star'},
    {value: '2', viewValue: '2 Stars'},
    {value: '3', viewValue: '3 Stars'},
    {value: '4', viewValue: '4 Stars'},
    {value: '5', viewValue: '5 Stars'}
  ];

  constructor(private router: Router) {
  }


  navigate(link: string): void {
    this.router.navigate(['/' + link]);
  }
  ngOnInit(): void {
  }

}
