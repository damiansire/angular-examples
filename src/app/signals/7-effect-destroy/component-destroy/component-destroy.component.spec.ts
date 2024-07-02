import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDestroyComponent } from './component-destroy.component';

describe('ComponentDestroyComponent', () => {
  let component: ComponentDestroyComponent;
  let fixture: ComponentFixture<ComponentDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
