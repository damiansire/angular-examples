import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOptionComponent } from './selection-option.component';

describe('SelectionOptionComponent', () => {
  let component: SelectionOptionComponent;
  let fixture: ComponentFixture<SelectionOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
