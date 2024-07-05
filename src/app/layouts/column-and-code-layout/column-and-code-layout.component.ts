import { Component, Input, signal, Signal } from '@angular/core';
import { TitleComponent } from '../../components-atom/title/title.component';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';

@Component({
  selector: 'app-column-and-code-layout',
  standalone: true,
  templateUrl: './column-and-code-layout.component.html',
  styleUrl: './column-and-code-layout.component.css',
  imports: [TitleComponent, CodeComponent],
})
export class ColumnAndCodeLayoutComponent {
  @Input() title = 'No Title';
  @Input() codeLines: Signal<codeLine[]> = signal<codeLine[]>([]);
}
