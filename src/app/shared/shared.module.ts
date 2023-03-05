import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyFatChartComponent } from './components/charts/body-fat-chart/body-fat-chart.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CaptionImageComponent } from './components/caption-image/caption-image.component';



@NgModule({
  declarations: [
    BodyFatChartComponent,
    CaptionImageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgbDropdownModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    BodyFatChartComponent,
    NgbDropdownModule,
    CaptionImageComponent
  ]
})
export class SharedModule { }
