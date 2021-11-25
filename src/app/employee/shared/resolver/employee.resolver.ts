import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from '../interface/employee.interface';
import { EmployeeService } from '../service/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<Employee[]> {

  constructor(private employeeService: EmployeeService) { }

  resolve(): Observable<Employee[]> {
    return of(this.employeeService.getEmployees());
  }
}
