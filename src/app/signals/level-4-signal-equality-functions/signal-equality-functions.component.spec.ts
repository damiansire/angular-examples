import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEqualityFunctionsComponent } from './signal-equality-functions.component';

describe('SignalEqualityFunctionsComponent', () => {
  let component: SignalEqualityFunctionsComponent;
  let fixture: ComponentFixture<SignalEqualityFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEqualityFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEqualityFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
