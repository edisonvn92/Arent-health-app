import { NgModule } from '@angular/core';

import { ColumnListRoutingModule } from './column-list-routing.module';
import { ColumnListComponent } from './column-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ColumnListComponent
  ],
  imports: [
    SharedModule,
    ColumnListRoutingModule
  ]
})
export class ColumnListModule { }
