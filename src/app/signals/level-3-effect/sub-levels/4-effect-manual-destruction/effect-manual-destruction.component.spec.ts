import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectManualDestructionComponent } from './effect-manual-destruction.component';

describe('EffectManualDestructionComponent', () => {
  let component: EffectManualDestructionComponent;
  let fixture: ComponentFixture<EffectManualDestructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectManualDestructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectManualDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
