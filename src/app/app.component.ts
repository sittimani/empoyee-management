import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './user-management/shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-management';
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe(isUserLoggedIn => {
      this.isLoggedIn = isUserLoggedIn
    })
  }

  logout() {
    this.authService.logout()
    this.router.navigate([""])
  }
}
