import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeService } from 'src/app/employee/shared/service/employee.service';
import { EmployerService } from 'src/app/employer/shared/service/employer.service';
import { LoginCreditionals } from '../interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn$: Observable<boolean>

  private isLoggedIn: BehaviorSubject<boolean>


  constructor(private employer: EmployerService) {
    this.isLoggedIn = new BehaviorSubject<boolean>(false)
    this.isLoggedIn$ = this.isLoggedIn.asObservable()
  }

  loggedIn() {
    localStorage.setItem("loggedin", "true")
    this.userStateChange(true)
  }

  logout() {
    localStorage.clear()
    this.userStateChange(false)
  }

  getUser() {
    return localStorage.getItem("loggedin")
  }

  userStateChange(value: boolean) {
    this.isLoggedIn.next(value)
  }

  verifyUser(data: LoginCreditionals) {
    const employer = this.employer.getEmployers().find((employer) => {
      return employer.email === data.email
    })

    if (!employer)
      return { statusCode: 404, message: "Invalid email" }
    if (employer?.password !== data.password)
      return { statusCode: 400, message: "Invalid password" }
    this.loggedIn()
    return { statusCode: 200, message: "Logged In" }
  }

}
