import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level5TheRouletteOfSignalComponent } from './level-5-the-roulette-of-signal.component';

describe('Level5TheRouletteOfSignalComponent', () => {
  let component: Level5TheRouletteOfSignalComponent;
  let fixture: ComponentFixture<Level5TheRouletteOfSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level5TheRouletteOfSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level5TheRouletteOfSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
