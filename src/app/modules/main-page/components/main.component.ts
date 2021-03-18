import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Options} from 'ng5-slider';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  task: Task = {
    name: 'Всі',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Фільми', completed: false, color: 'warn'},
      {name: 'Музика', completed: false, color: 'warn'},
      {name: 'Розваги', completed: false, color: 'warn'},
      {name: 'Бізнес', completed: false, color: 'warn'},
      {name: 'Спорт та Фітнес', completed: false, color: 'warn'},
      {name: 'Інше', completed: false, color: 'warn'},
    ]
  };
  allComplete = false;
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
  priceValue = 0;
  priceHighValue = 50;
  options: Options = {
    floor: 0,
    ceil: 50,
    step: 1,
    showTicks: false
  };


  ratingValue = 0;
  ratingHighValue = 5;
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

  updateAllComplete(): void {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean): void {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}
