import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Employer } from '../../shared/interface/employer.interface';
import { EmployerService } from '../../shared/service/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employerList: Employer[] = []

  headers = ["name", "email", "team", "experience"]
  items!: Employer[]


  constructor(private employerService: EmployerService, private activatedRoute: ActivatedRoute) {
    // this.items = this.employerService.getEmployers()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.employers
    })

  }

}
