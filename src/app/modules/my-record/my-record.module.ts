import { NgModule } from '@angular/core';

import { MyRecordRoutingModule } from './my-record-routing.module';
import { MyRecordComponent } from './my-record.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DiaryCardComponent } from './components/diary-card/diary-card.component';
import { ExerciseInfoComponent } from './components/exercise-info/exercise-info.component';


@NgModule({
  declarations: [
    MyRecordComponent,
    DiaryCardComponent,
    ExerciseInfoComponent
  ],
  imports: [
    SharedModule,
    MyRecordRoutingModule
  ]
})
export class MyRecordModule { }
