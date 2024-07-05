import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnAndCodeLayoutComponent } from './column-and-code-layout.component';

describe('ColumnAndCodeLayoutComponent', () => {
  let component: ColumnAndCodeLayoutComponent;
  let fixture: ComponentFixture<ColumnAndCodeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnAndCodeLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnAndCodeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
