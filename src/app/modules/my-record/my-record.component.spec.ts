import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecordComponent } from './my-record.component';

describe('MyRecordComponent', () => {
  let component: MyRecordComponent;
  let fixture: ComponentFixture<MyRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
