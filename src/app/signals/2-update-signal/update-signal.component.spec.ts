import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSignalComponent } from './update-signal.component';

describe('UpdateSignalComponent', () => {
  let component: UpdateSignalComponent;
  let fixture: ComponentFixture<UpdateSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
