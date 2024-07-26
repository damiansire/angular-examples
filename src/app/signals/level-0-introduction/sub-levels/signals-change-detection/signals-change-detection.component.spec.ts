import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsChangeDetectionComponent } from './signals-change-detection.component';

describe('SignalsChangeDetectionComponent', () => {
  let component: SignalsChangeDetectionComponent;
  let fixture: ComponentFixture<SignalsChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
