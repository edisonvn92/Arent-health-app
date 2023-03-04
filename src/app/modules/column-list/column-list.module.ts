import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnListRoutingModule } from './column-list-routing.module';
import { ColumnListComponent } from './column-list.component';


@NgModule({
  declarations: [
    ColumnListComponent
  ],
  imports: [
    CommonModule,
    ColumnListRoutingModule
  ]
})
export class ColumnListModule { }
