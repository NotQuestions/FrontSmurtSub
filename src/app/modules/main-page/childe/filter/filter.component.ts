import {Component, OnInit} from '@angular/core';
import {Options} from 'ng5-slider';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

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

  sorts: string[] = [
    'Ціна', 'Рейтинг', 'Популярність', 'Новинки'
  ];


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

  constructor() {
  }

  ngOnInit(): void {
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
