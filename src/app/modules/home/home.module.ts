import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 90,
      outerStrokeWidth: 5,
      outerStrokeColor: 'white',
      showInnerStroke: false,
      unitsColor: 'white'
    })
  ]
})
export class HomeModule { }
