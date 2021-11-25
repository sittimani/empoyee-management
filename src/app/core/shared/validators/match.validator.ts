import { AbstractControl } from "@angular/forms";

export function misMatchValidator(firstField: string, secondField: string) {
    return (control: AbstractControl) => {
        const firstControl = control.get(firstField)
        const secondControl = control.get(secondField)
        return firstControl?.value === secondControl?.value ? null : setError(secondControl, secondControl?.value)
    }
}

function setError(control: AbstractControl | null, value: string) {
    control?.setErrors({ misMatch: { value: value } })
    return null
}