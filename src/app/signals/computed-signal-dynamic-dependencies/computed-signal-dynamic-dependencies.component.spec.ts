import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalDynamicDependenciesComponent } from './computed-signal-dynamic-dependencies.component';

describe('ComputedSignalDynamicDependenciesComponent', () => {
  let component: ComputedSignalDynamicDependenciesComponent;
  let fixture: ComponentFixture<ComputedSignalDynamicDependenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignalDynamicDependenciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignalDynamicDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
