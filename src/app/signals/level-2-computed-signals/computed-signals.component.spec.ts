import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalsLevelComponent } from './computed-signals.component';

describe('ComputedSignalsLevelComponent', () => {
  let component: ComputedSignalsLevelComponent;
  let fixture: ComponentFixture<ComputedSignalsLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignalsLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputedSignalsLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
