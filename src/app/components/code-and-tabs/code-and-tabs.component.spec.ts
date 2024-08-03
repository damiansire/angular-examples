import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAndTabsComponent } from './code-and-tabs.component';

describe('CodeAndTabsComponent', () => {
  let component: CodeAndTabsComponent;
  let fixture: ComponentFixture<CodeAndTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeAndTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeAndTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
