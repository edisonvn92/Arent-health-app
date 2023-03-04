import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFatChartComponent } from './body-fat-chart.component';

describe('BodyFatChartComponent', () => {
  let component: BodyFatChartComponent;
  let fixture: ComponentFixture<BodyFatChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFatChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyFatChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
