import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionWithSignalsComponent } from './interaction-with-signals.component';

describe('InteractionWithSignalsComponent', () => {
  let component: InteractionWithSignalsComponent;
  let fixture: ComponentFixture<InteractionWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionWithSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
