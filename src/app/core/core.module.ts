import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './shared/validators/email.directive';
import { PasswordDirective } from './shared/validators/password.directive';



@NgModule({
  declarations: [
    EmailDirective,
    PasswordDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective
  ]
})
export class CoreModule { }
