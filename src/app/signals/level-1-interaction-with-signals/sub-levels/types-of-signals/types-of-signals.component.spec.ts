import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfSignalsComponent } from './types-of-signals.component';

describe('TypesOfSignalsComponent', () => {
  let component: TypesOfSignalsComponent;
  let fixture: ComponentFixture<TypesOfSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesOfSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesOfSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
