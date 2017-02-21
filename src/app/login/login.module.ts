import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTextBoxModule, DxCheckBoxModule, DxButtonModule } from 'devextreme-angular';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxCheckBoxModule, 
    DxButtonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
