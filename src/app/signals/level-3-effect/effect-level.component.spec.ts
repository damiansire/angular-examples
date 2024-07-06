import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectLevelComponent } from './effect-level.component';

describe('EffectLevelComponent', () => {
  let component: EffectLevelComponent;
  let fixture: ComponentFixture<EffectLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
