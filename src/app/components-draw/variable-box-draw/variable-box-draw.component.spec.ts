import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableBoxDrawComponent } from './variable-box-draw.component';

describe('VariableBoxDrawComponent', () => {
  let component: VariableBoxDrawComponent;
  let fixture: ComponentFixture<VariableBoxDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableBoxDrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableBoxDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
