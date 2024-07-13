import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsSignalsComponent } from './what-is-signals.component';

describe('WhatIsSignalsComponent', () => {
  let component: WhatIsSignalsComponent;
  let fixture: ComponentFixture<WhatIsSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
