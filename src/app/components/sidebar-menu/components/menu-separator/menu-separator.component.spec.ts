import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSeparatorComponent } from './menu-separator.component';

describe('MenuSeparatorComponent', () => {
  let component: MenuSeparatorComponent;
  let fixture: ComponentFixture<MenuSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSeparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
