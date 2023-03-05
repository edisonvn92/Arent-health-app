import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionImageComponent } from './caption-image.component';

describe('CaptionImageComponent', () => {
  let component: CaptionImageComponent;
  let fixture: ComponentFixture<CaptionImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptionImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
