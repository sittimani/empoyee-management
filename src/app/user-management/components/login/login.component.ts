import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/employer/shared/service/employer.service';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.getUser())
      this.router.navigate(["employer-list"])
  }

  login() {
    const response = this.authService.verifyUser(this.model)
    if (response.statusCode === 200) {
      this.router.navigate(["employer-list"])
    }
    alert(response.message)
  }
}
