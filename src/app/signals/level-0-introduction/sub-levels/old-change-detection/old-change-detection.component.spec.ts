import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldChangeDetectionComponent } from './old-change-detection.component';

describe('OldChangeDetectionComponent', () => {
  let component: OldChangeDetectionComponent;
  let fixture: ComponentFixture<OldChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
