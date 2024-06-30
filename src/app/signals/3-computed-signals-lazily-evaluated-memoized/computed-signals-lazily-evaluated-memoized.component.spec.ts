import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './multiples-signals-evaluated';

describe('ComputedSignalsLazilyEvaluatedMemoizedComponent', () => {
  let component: ComputedSignalsLazilyEvaluatedMemoizedComponent;
  let fixture: ComponentFixture<ComputedSignalsLazilyEvaluatedMemoizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignalsLazilyEvaluatedMemoizedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ComputedSignalsLazilyEvaluatedMemoizedComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
