import { Component, Input, signal, Signal } from '@angular/core';
import { TitleComponent } from '../../components-atom/title/title.component';
import { CodeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';
import { CodeLegazyComponent } from '../../components-atom/code-legazy/code-legazy.component';

@Component({
  selector: 'app-column-and-code-layout',
  standalone: true,
  templateUrl: './column-and-code-layout.component.html',
  styleUrl: './column-and-code-layout.component.css',
  imports: [TitleComponent, CodeComponent, CodeLegazyComponent],
})
export class ColumnAndCodeLayoutComponent {
  @Input() title = 'No Title';
  @Input() codeLines: Signal<CodeLine[]> = signal<CodeLine[]>([]);
}
