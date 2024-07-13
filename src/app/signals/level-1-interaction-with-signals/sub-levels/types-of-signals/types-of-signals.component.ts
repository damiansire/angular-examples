import { Component, computed } from '@angular/core';
import { ColumnAndCodeLayoutComponent } from '../../../../layouts/column-and-code-layout/column-and-code-layout.component';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { TitleComponent } from '../../../../components-atom/title/title.component';
import { CodeComponent } from '../../../../components-atom/code/code.component';

@Component({
  selector: 'app-types-of-signals',
  standalone: true,
  imports: [ColumnAndCodeLayoutComponent, TitleComponent, CodeComponent],
  templateUrl: './types-of-signals.component.html',
  styleUrl: './types-of-signals.component.css',
})
export class TypesOfSignalsComponent {
  lines = computed<CodeLine[]>(() => [
    { line: '', active: false },
    { line: 'count = signal(0);      ', active: false },
    { line: '', active: false },
  ]);
}
