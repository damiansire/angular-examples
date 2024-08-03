import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSubLevelOptionComponent } from './menu-sub-level-option.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MenuSubLevelOptionComponent', () => {
  let component: MenuSubLevelOptionComponent;
  let fixture: ComponentFixture<MenuSubLevelOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSubLevelOptionComponent, ActivatedRoute],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }), // Example parameters
            // Add other properties/methods you might need
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSubLevelOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
