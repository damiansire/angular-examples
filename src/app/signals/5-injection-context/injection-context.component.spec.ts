import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionContextComponent } from './injection-context.component';

describe('InjectionContextComponent', () => {
  let component: InjectionContextComponent;
  let fixture: ComponentFixture<InjectionContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
