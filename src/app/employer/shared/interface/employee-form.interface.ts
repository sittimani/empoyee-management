import { AbstractControl, FormArray } from "@angular/forms";

export interface EmployeeForm {
    name: AbstractControl | null,
    team: AbstractControl | null,
    mailId: AbstractControl | null,
    confirmMailId: AbstractControl | null,
    optionalemail: FormArray | null
}