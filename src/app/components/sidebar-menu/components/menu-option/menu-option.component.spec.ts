import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOptionComponent } from './menu-option.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MenuOptionComponent', () => {
  let component: MenuOptionComponent;
  let fixture: ComponentFixture<MenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuOptionComponent, ActivatedRoute],
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

    fixture = TestBed.createComponent(MenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
