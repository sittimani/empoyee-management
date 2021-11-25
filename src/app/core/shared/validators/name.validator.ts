import { AbstractControl } from "@angular/forms";

export function InvalidName (control: AbstractControl) {
    const value = control.value
    const regex = /name/
    return regex.test(value) ? {invalidName: {value: value}} : null
}