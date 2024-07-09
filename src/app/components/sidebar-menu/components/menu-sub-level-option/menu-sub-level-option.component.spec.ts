import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubLevelOptionComponent } from './menu-sub-level-option.component';

describe('MenuSubLevelOptionComponent', () => {
  let component: MenuSubLevelOptionComponent;
  let fixture: ComponentFixture<MenuSubLevelOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSubLevelOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSubLevelOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
