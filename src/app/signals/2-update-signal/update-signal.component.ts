import {
  Component,
  ElementRef,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { CodeComponent } from '../../components-atom/code/code.component';
import { codeLine } from '../../components-atom/component-atom.interface';
import { ColumnAndCodeLayoutComponent } from '../../layouts/column-and-code-layout/column-and-code-layout.component';

@Component({
  selector: 'app-update-signal',
  standalone: true,
  templateUrl: './update-signal.component.html',
  styleUrl: './update-signal.component.css',
  imports: [CodeComponent, ColumnAndCodeLayoutComponent],
})
export class UpdateSignalComponent {
  count = signal(0);
  @ViewChild('signalSetInput') myInput!: ElementRef<HTMLInputElement>;
  ngOnInit() {
    console.log('The count is: ' + this.count());
  }
  update() {
    this.count.update((value) => value + 1);
    console.log(this.count());
  }

  lines = computed<codeLine[]>(() => [
    { line: 'count = signal(0);', active: false },
    { line: 'update() {', active: false },
    { line: '  this.count.update((value) => value + 1);', active: true },
    { line: '  console.log(this.count());', active: false },
    { line: '}', active: false },
  ]);
}
