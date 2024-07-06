import {
  Component,
  ElementRef,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { ColumnAndCodeLayoutComponent } from '../../../../layouts/column-and-code-layout/column-and-code-layout.component';

@Component({
  selector: 'app-writable-signals',
  standalone: true,
  templateUrl: './writable-signals.component.html',
  styleUrl: './writable-signals.component.css',
  imports: [CodeComponent, ColumnAndCodeLayoutComponent],
})
export class WritableSignalsComponent {
  count = signal(0);
  @ViewChild('signalSetInput') myInput!: ElementRef<HTMLInputElement>;
  ngOnInit() {
    console.log('The count is: ' + this.count());
  }
  update() {
    this.count.update((value) => value + 1);
    console.log(this.count());
  }

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
  setValue() {
    const inputValue = parseInt(this.myInput.nativeElement.value, 10);
    if (!isNaN(inputValue)) {
      this.count.set(inputValue);
    }
  }
}
