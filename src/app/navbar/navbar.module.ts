import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTreeViewModule } from 'devextreme-angular';

import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    DxTreeViewModule
  ],
  declarations: [TopNavbarComponent, SideNavbarComponent],
  exports: [TopNavbarComponent, SideNavbarComponent]
})
export class NavbarModule { }
