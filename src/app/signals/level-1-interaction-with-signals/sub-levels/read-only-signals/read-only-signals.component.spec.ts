import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlySignalsComponent } from './read-only-signals.component';

describe('ReadOnlySignalsComponent', () => {
  let component: ReadOnlySignalsComponent;
  let fixture: ComponentFixture<ReadOnlySignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadOnlySignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadOnlySignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
