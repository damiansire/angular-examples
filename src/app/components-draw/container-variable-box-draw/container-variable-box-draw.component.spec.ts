import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerVariableBoxDrawComponent } from './container-variable-box-draw.component';

describe('ContainerVariableBoxDrawComponent', () => {
  let component: ContainerVariableBoxDrawComponent;
  let fixture: ComponentFixture<ContainerVariableBoxDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerVariableBoxDrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerVariableBoxDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
