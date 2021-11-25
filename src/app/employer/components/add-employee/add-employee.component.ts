import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidator } from 'src/app/core/shared/validators/email.validators';
import { misMatchValidator } from 'src/app/core/shared/validators/match.validator';
import { InvalidName } from 'src/app/core/shared/validators/name.validator';
import { EmployeeService } from 'src/app/employee/shared/service/employee.service';
import { EmployeeForm } from '../../shared/interface/employee-form.interface';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm: FormGroup
  controls!: EmployeeForm;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) {
    this.employeeForm = this.fb.group({
      name: ["", [Validators.required, InvalidName]],
      team: ["", [Validators.required, InvalidName]],
      confirmMailId: ["", []],
      mailId: ["", [Validators.required, EmailValidator]],
      optionalemail: new FormArray([])
    }, {validators: misMatchValidator('mailId', 'confirmMailId')})
    this.setControls()
  }

  setControls() {
    this.controls = {
      name: this.employeeForm.get('name'),
      team: this.employeeForm.get('team'),
      mailId: this.employeeForm.get('mailId'),
      confirmMailId: this.employeeForm.get('confirmMailId'),
      optionalemail: (<FormArray>this.employeeForm.controls['optionalemail'])
    }
  }

  optionalEmail() {
    return this.employeeForm.get("optionalemail") as FormArray
  }

  remove(index: number) {
    this.optionalEmail().removeAt(index)
  }

  addEmail() {
    const emails: FormArray = <FormArray>this.employeeForm.get("optionalemail")
    emails.push(new FormControl("", [Validators.required, EmailValidator]))
  }

  get optionalEmailControl() {
    return (<FormArray>this.employeeForm.get('optionalemail')).controls
  }

  submitForm() {
    this.employeeService.setEmployee(this.employeeForm.value)
    this.router.navigate(["employee-list"])
  }
}
