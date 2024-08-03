import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLegazyComponent } from './code-legazy.component';

describe('CodeLegazyComponent', () => {
  let component: CodeLegazyComponent;
  let fixture: ComponentFixture<CodeLegazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeLegazyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeLegazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
