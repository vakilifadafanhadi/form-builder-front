import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    CreateUpdateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    SharedModule
  ]
})
export class HomeLayoutModule { }
