import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenciesStatusComponent } from './dependencies-status.component';

describe('DependenciesStatusComponent', () => {
  let component: DependenciesStatusComponent;
  let fixture: ComponentFixture<DependenciesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependenciesStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependenciesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
