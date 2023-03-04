import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnListComponent } from './column-list.component';

const routes: Routes = [{ path: '', component: ColumnListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnListRoutingModule { }
