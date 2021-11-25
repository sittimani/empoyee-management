import { AbstractControl } from "@angular/forms";

export function EmailValidator(control: AbstractControl) {
    const value = control.value;
    const regex = /email/
    return regex.test(value) ? null : { invalidEmail: { value: value } }
}