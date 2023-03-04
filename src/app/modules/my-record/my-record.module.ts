import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRecordRoutingModule } from './my-record-routing.module';
import { MyRecordComponent } from './my-record.component';


@NgModule({
  declarations: [
    MyRecordComponent
  ],
  imports: [
    CommonModule,
    MyRecordRoutingModule
  ]
})
export class MyRecordModule { }
