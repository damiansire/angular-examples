import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHistoryComponent } from './event-history.component';

describe('EventHistoryComponent', () => {
  let component: EventHistoryComponent;
  let fixture: ComponentFixture<EventHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
