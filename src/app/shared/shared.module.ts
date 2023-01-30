import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    MatCardComponent,
    TextAreaComponent,
    RadioButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
    NgSelectModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    InputComponent,
    SelectComponent,
    MatCardComponent,
    MatIconModule,
    TextAreaComponent,
    NgSelectModule,
    RadioButtonComponent,
    ToastrModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class SharedModule { }
