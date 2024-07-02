import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyBoxComponent } from './destroy-box.component';

describe('DestroyBoxComponent', () => {
  let component: DestroyBoxComponent;
  let fixture: ComponentFixture<DestroyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
