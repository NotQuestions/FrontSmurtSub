import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main.component';
import {FilterComponent} from './childe/filter/filter.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: FilterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
