import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerListComponent } from './components/employer-list/employer-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployerListComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmployerModule { }
