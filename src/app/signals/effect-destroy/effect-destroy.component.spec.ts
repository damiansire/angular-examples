import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectDestroyComponent } from './effect-destroy.component';

describe('EffectDestroyComponent', () => {
  let component: EffectDestroyComponent;
  let fixture: ComponentFixture<EffectDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectDestroyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
