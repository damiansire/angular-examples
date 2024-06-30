import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickHistoryComponent } from './click-history.component';

describe('ClickHistoryComponent', () => {
  let component: ClickHistoryComponent;
  let fixture: ComponentFixture<ClickHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
