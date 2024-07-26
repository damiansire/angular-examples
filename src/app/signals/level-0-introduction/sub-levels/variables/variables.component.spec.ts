import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesComponent } from './variables.component';

describe('VariablesComponent', () => {
  let component: VariablesComponent;
  let fixture: ComponentFixture<VariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
