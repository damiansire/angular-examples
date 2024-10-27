import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersControlButtonsComponent } from './sliders-control-buttons.component';

describe('SlidersControlButtonsComponent', () => {
  let component: SlidersControlButtonsComponent;
  let fixture: ComponentFixture<SlidersControlButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidersControlButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidersControlButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
