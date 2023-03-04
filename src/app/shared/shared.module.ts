import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyFatChartComponent } from './components/charts/body-fat-chart/body-fat-chart.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    BodyFatChartComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    BodyFatChartComponent
  ]
})
export class SharedModule { }
