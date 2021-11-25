import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

import { Employer } from '../../shared/interface/employer.interface';
import { EmployerService } from '../../shared/service/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employerList: Employer[] = []

  headers = ["name", "email"]
  items!: Employer[]

  detailedHeaders: string[] = []
  detailedItems: Employer[] = []
  isDetailedView = false

  isViewOption = false


  constructor(
    private employerService: EmployerService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.dataService.setHeader("Employer List")
    // this.items = this.employerService.getEmployers()
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.employers
    })
  }

  viewData(index: number) {
    this.isDetailedView = true
    this.detailedHeaders = ["name", "email", "team", "experience"]
    this.detailedItems = [this.items[index]]
  }

}
