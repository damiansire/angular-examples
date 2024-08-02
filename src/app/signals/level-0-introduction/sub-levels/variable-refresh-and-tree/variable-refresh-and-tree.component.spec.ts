import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableRefreshAndTreeComponent } from './variable-refresh-and-tree.component';

describe('VariableRefreshAndTreeComponent', () => {
  let component: VariableRefreshAndTreeComponent;
  let fixture: ComponentFixture<VariableRefreshAndTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableRefreshAndTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableRefreshAndTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
