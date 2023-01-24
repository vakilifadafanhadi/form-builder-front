import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { HomeLayoutComponent } from './home-layout.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'create-update',
        component: CreateUpdateComponent
      },
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
