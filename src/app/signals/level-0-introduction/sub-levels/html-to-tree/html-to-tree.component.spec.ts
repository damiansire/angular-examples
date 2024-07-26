import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToTreeComponent } from './html-to-tree.component';

describe('HtmlToTreeComponent', () => {
  let component: HtmlToTreeComponent;
  let fixture: ComponentFixture<HtmlToTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlToTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
