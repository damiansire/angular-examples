import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperAnimationComponent } from './wrapper-animation.component';

describe('WrapperAnimationComponent', () => {
  let component: WrapperAnimationComponent;
  let fixture: ComponentFixture<WrapperAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
