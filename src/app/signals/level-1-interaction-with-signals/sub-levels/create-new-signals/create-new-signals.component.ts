import { Component, computed } from '@angular/core';
import { ColumnAndCodeLayoutComponent } from '../../../../layouts/column-and-code-layout/column-and-code-layout.component';
import { CodeLine } from '../../../../components-atom/component-atom.interface';

@Component({
  selector: 'app-create-new-signals',
  standalone: true,
  imports: [ColumnAndCodeLayoutComponent],
  templateUrl: './create-new-signals.component.html',
  styleUrl: './create-new-signals.component.css',
})
export class CreateNewSignalsComponent {
  lines = computed<CodeLine[]>(() => [
    { line: 'count = signal(0);', active: true },
    { line: 'setValue() {', active: false },
    {
      line: '  const inputValue = parseInt(this.myInput.nativeElement.value, 10);',
      active: false,
    },
    { line: '  if (!isNaN(inputValue)) {', active: false },
    { line: '    this.count.set(inputValue);', active: true }, // Esta línea se ejecuta solo si inputValue es un número
    { line: '  }', active: false },
    { line: '}', active: false },
  ]);
}
