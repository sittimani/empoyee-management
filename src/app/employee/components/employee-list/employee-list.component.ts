import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../shared/interface/employee.interface';
import { EmployeeService } from '../../shared/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  headers = ["name", "team", "mailId", "alternateMailId"]
  items!: Employee[]

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.items = data.employees
    })
  }

  delete(index: number) {
    this.employeeService.removeEmployee(index)
  }

}
