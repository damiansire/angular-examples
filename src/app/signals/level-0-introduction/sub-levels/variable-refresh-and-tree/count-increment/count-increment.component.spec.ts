import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountIncrementComponent } from './count-increment.component';

describe('CountIncrementComponent', () => {
  let component: CountIncrementComponent;
  let fixture: ComponentFixture<CountIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountIncrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
