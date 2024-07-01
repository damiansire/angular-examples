import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableBoxComponent } from './variable-box.component';

describe('VariableBoxComponent', () => {
  let component: VariableBoxComponent;
  let fixture: ComponentFixture<VariableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
