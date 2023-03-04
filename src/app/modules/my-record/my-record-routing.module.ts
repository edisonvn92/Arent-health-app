import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRecordComponent } from './my-record.component';

const routes: Routes = [{ path: '', component: MyRecordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecordRoutingModule { }
