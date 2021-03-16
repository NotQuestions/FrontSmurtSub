import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  filters: string[] = [
    'filter1', 'filter2', 'filter3'
  ];
  sorts: string[] = [
    'Ціна', 'Рейтинг', 'Популярність', 'Новинки'
  ];

  bots = new Map([
    ['BotName1', 2], ['BotName2', 3], ['BotName3', 3],
    ['BotName4', 5], ['BotName5', 1], ['BotName6', 0],
    ['BotName7', 4], ['BotName8', 5], ['BotName9', 4],
    ['BotName10', 4], ['BotName11', 5], ['BotName12', 5],
    ['BotName13', 3], ['BotName14', 2], ['BotName15', 1],
  ]);
  minPrice = 10;
  maxPrice = 40;
  priceValue = 10;
  priceHighValue = 40;
  options: Options = {
    floor: 0,
    ceil: 50,
    step: 1,
    showTicks: false
  };
  minRating = 1;
  maxRating = 4;
  ratingValue = 1;
  ratingHighValue = 4;
  optionsRating: Options = {
    floor: 0,
    ceil: 5,
    step: 1,
    showTicks: true
  };

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }


  navigate(link: string): void {
    this.router.navigate(['/' + link]);
  }
  slidePrice(): void{
   this.priceValue = this.minPrice;
   this.priceHighValue = this.maxPrice;
  }

  slideRating(): void{
    this.ratingValue = this.minRating;
    this.ratingHighValue = this.maxRating;
  }

}
