import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, Router } from '@angular/router';
import { AddEmployeeComponent } from 'src/app/employer/components/add-employee/add-employee.component';
import { AuthService } from 'src/app/user-management/shared/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<any>, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.getUser()) {
      this.authService.userStateChange(true)
      return true;
    }
    this.router.navigate([""])
    return false
  }

  canDeactivate(component: AddEmployeeComponent): boolean {
    if (component.employeeForm.touched) {
      return this.getConfirmation()
    }
    return true
  }

  canActivateChild() {
    if (this.authService.getUser() === "Employer")
      return true
    return false
  }
  getConfirmation() {
    return confirm("You have unsaved data, Are you sure, you want to leave the page?") ? true : false
  }


}
