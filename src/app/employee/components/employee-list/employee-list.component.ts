import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { Employee } from '../../shared/interface/employee.interface';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  headers = ["name", "team"]
  items!: Employee[]


  detailedHeaders: string[] = []
  detailedItems: Employee[] = []
  isDetailedView = false

  isViewOption = true

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { 
    this.dataService.setHeader("Employee List")
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.employees
    })
  }

  delete(index: number) {
    this.employeeService.removeEmployee(index)
  }

  viewData(index: number) {
    this.router.navigate(['somewhere'], {relativeTo: this.activatedRoute})
    this.isDetailedView = true
    this.detailedHeaders = ["name", "team", "mailId", "alternateMailId"]
    this.detailedItems = [this.items[index]]
  }

  hideView() {
    this.isDetailedView = false
  }


}
