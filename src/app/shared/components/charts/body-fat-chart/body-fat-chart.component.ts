import { Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as moment from 'moment';
import { BaseChart } from '../base-chart';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-body-fat-chart',
  templateUrl: './body-fat-chart.component.html',
  styleUrls: ['./body-fat-chart.component.scss']
})

export class BodyFatChartComponent implements OnInit {
  @Input() divHeight = '200px';
  @Input() backgroundColorClass = 'bg-black-600' 
  @Input() data = [
    {
      date: moment().toDate(),
      fatAmount: 10,
      fatAmount2: 20,
    },
    {
      date: moment().subtract(1, 'M').toDate(),
      fatAmount: 20,
      fatAmount2: 10,
    },
    {
      date: moment().subtract(2, 'M').toDate(),
      fatAmount: 10,
      fatAmount2: 11,
    },
    {
      date: moment().subtract(3, 'M').toDate(),
      fatAmount: 40,
      fatAmount2: 10,
    },
    {
      date: moment().subtract(4, 'M').toDate(),
      fatAmount: 20,
      fatAmount2: 10,
    },
    {
      date: moment().subtract(5, 'M').toDate(),
      fatAmount:12,
      fatAmount2: 16,
    },
    {
      date: moment().subtract(6, 'M').toDate(),
      fatAmount: 33,
      fatAmount2: 15,
    },{
      date: moment().subtract(7, 'M').toDate(),
      fatAmount: 21,
      fatAmount2: 10,
    },
    {
      date: moment().subtract(8, 'M').toDate(),
      fatAmount: 27,
      fatAmount2: 13,
    },
    {
      date: moment().subtract(9, 'M').toDate(),
      fatAmount: 17,
      fatAmount2: 12,
    },
    {
      date: moment().subtract(10, 'M').toDate(),
      fatAmount: 23,
      fatAmount2: 10,
    },
    {
      date: moment().subtract(11, 'M').toDate(),
      fatAmount: 20,
      fatAmount2: 10,
    }

  ];
  endDate = moment().toDate();
  startDate = moment().subtract(1, 'y').toDate()
  bodyFatChart: BaseChart | any;
  constructor(private translateService: TranslateService) {}
  
  ngOnInit() {
    this.bodyFatChart = new BodyFatChart(
      this.startDate,
      this.endDate,
      'bodyFatChart',
      this.translateService
    );
    this.bodyFatChart.data = this.data;
    this.bodyFatChart.createChart()
  }

}
export class BodyFatChart extends BaseChart {
  bodyFatAxis: am4charts.Axis | any;
  override loadData() {
    return this.data;
  }
  override createChart() {
    super.createChart();
    this.createBodyFatSeries('fatAmount', '#FFCC21');
    this.createBodyFatSeries('fatAmount2', '#8FE9D0')
  }

  override createYAxis() {
      this.bodyFatAxis = this.contentChart.yAxes.push(new am4charts.ValueAxis());
      this.bodyFatAxis.min = 5;
      this.bodyFatAxis.max = 40;
      this.bodyFatAxis.strictMinMax = true;
      this.bodyFatAxis.renderer.grid.template.disabled = true;
      this.bodyFatAxis.renderer.labels.template.disabled = true;
  }

   /**
   * Create body weight series
   *
   */
   createBodyFatSeries(yValue: string, color: string) {
    const series = this.contentChart.series.push(new am4charts.LineSeries());
    series.yAxis = this.bodyFatAxis;
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = yValue;
    series.stroke = am4core.color(color);
    series.strokeWidth = 3;

    // add circle bullet for each data
    const bullet = series.bullets.push(new am4charts.Bullet());
    const bulletCircle = bullet.createChild(am4core.Circle);
    bulletCircle.radius = 6;
    bulletCircle.fill = am4core.color(color);
    bulletCircle.stroke = am4core.color(color);
    
  }
}