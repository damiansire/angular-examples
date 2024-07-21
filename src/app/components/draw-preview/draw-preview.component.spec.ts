import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPreviewComponent } from './draw-preview.component';

describe('DrawPreviewComponent', () => {
  let component: DrawPreviewComponent;
  let fixture: ComponentFixture<DrawPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
