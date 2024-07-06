import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalManualDestructionComponent } from './interval-manual-destruction.component';

describe('IntervalManualDestructionComponent', () => {
  let component: IntervalManualDestructionComponent;
  let fixture: ComponentFixture<IntervalManualDestructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalManualDestructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalManualDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
