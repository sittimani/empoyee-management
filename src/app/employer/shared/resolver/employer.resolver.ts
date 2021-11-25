import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employer } from '../interface/employer.interface';
import { EmployerService } from '../service/employer.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerResolver implements Resolve<Employer[]> {
  constructor(private employerService: EmployerService) { }

  resolve(): Observable<Employer[]> {
    return of(this.employerService.getEmployers());
  }
}
