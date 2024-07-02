import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyEffectComponent } from './destroy-effect.component';

describe('DestroyEffectComponent', () => {
  let component: DestroyEffectComponent;
  let fixture: ComponentFixture<DestroyEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
