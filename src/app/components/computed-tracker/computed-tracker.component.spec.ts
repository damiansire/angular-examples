import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedTrackerComponent } from './computed-tracker.component';

describe('ComputedTrackerComponent', () => {
  let component: ComputedTrackerComponent;
  let fixture: ComponentFixture<ComputedTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
