import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSignalsComponent } from './create-new-signals.component';

describe('CreateNewSignalsComponent', () => {
  let component: CreateNewSignalsComponent;
  let fixture: ComponentFixture<CreateNewSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
