import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerListComponent } from './components/employer-list/employer-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployerListComponent,
    AddEmployeeComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class EmployerModule { }
