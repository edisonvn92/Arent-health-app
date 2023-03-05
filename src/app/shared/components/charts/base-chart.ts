import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { TranslateService } from '@ngx-translate/core';

export class BaseChart {
  labelColor = am4core.color('#7F7F7F');
  public translate: TranslateService;
  public chartContainer: am4core.Container | any;
  public contentChart: am4charts.XYChart | any;
  public data: any;
  public startDate: string | Date = new Date();
  public endDate: string | Date = new Date();
  public maxValue: number = 0;
  public containerId: string = '';
  public dateAxis: am4charts.Axis | any;
  public hospitalSetting: any;
  public cellWidth: number = 0;
  /**
   * constructor for all charts in patient details view
   *
   * @param startDate
   * @param endDate
   * @param containerId
   * @param translateService
   */
  constructor(
    startDate: string | Date,
    endDate: string | Date,
    containerId: string,
    translateService: TranslateService
  ) {
    this.containerId = containerId;
    this.endDate = endDate;
    this.startDate = startDate;
    this.translate = translateService;
    am4core.options.autoSetClassName = true;
    am4core.options.autoDispose = true;
    this.createChartContainer(this.containerId);
    this.boot();
    console.log(this.endDate, this.startDate);
  }

  /**
   * Create container for chart
   * @param containerId id of the container div
   */
  createChartContainer(containerId: string) {
    am4core.useTheme(am4themes_animated);
    this.chartContainer = am4core.create(containerId, am4core.Container);
    this.chartContainer.width = am4core.percent(100);
    this.chartContainer.height = am4core.percent(100);
    this.chartContainer.resizable = true;
    this.chartContainer.padding = 0;
    this.chartContainer.margin = 0;
    this.chartContainer.layout = 'vertical';
    this.chartContainer.togglable = true;
  }

  /**
   * What to run when the chart is created: load data, create label, create container, create chart.
   */
  boot(): void {
    this.createContentChart();
    this.contentChart.chartContainer.toBack();
  }
  /**
   * Process to create each invidual chart.
   */
  createChart(): void {
    this.contentChart.data = this.loadData();
    // set up x axis (date axis)
    this.createDateAxis();
    this.createYAxis();
  }

  loadData(): any[] {
    return [];
  }

  /**
   * destroy the chart (when the data change and a new chart is needed, or move to other pages)
   */
  dispose(): void {
    if (this.contentChart) {
      this.contentChart.dispose();
      this.contentChart = null;
    }
  }

  /**
   * Create a chart inside the container
   */
  createContentChart(): void {
    this.contentChart = this.chartContainer.createChild(am4charts.XYChart);
  }

  createDateAxis(): void {
    this.dateAxis = this.contentChart.xAxes.push(new am4charts.DateAxis());
    this.dateAxis.min = this.startDate;
    this.dateAxis.max = this.endDate;
    this.dateAxis.dateFormats.setKey('month', 'M');
    this.dateAxis.periodChangeDateFormats.setKey('day', 'd');
    this.dateAxis.baseInterval = {
      timeUnit: 'month',
      count: 1,
    };
    this.dateAxis.gridIntervals.setAll([{ timeUnit: 'month', count: 1 }]);
    this.dateAxis.renderer.grid.template.location = 0.5;
    this.dateAxis.renderer.grid.template.stroke = am4core.color('white');
    this.dateAxis.renderer.labels.template.dy = 15;
    this.dateAxis.renderer.labels.template.fontSize = 12;
    this.dateAxis.renderer.labels.template.fill = am4core.color('white');
    return this.dateAxis;
  }

  /**
   * Template to create y axis
   */
  createYAxis(): any {}

}
