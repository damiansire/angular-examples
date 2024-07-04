import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeComponent } from '../../components-atom/code/code.component';
import { codeLine } from '../../components-atom/component-atom.interface';
import { TitleComponent } from '../../components-atom/title/title.component';

@Component({
  selector: 'app-computed-signals',
  standalone: true,
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css',
  imports: [CommonModule, FormsModule, CodeComponent, TitleComponent],
})
export class ComputedSignalsComponent {
  firstName: WritableSignal<string> = signal('Damian');
  surname: WritableSignal<string> = signal('Sire');
  fullName: Signal<string> = computed(() => {
    return `${this.firstName()} ${this.surname()}`;
  });

  setFirstName(eventTarget: any) {
    const value = eventTarget?.value || '';
    this.firstName.set(value);
  }

  setLastName(eventTarget: any) {
    const value = eventTarget?.value || '';
    this.surname.set(value);
  }

  lines = computed<codeLine[]>(() => [
    {
      line: 'firstName: WritableSignal<string> = signal("Damian");',
      active: false,
    },
    {
      line: 'surname: WritableSignal<string> = signal("Sire");',
      active: false,
    },
    { line: 'fullName: Signal<string> = computed(() => {', active: true },
    {
      line: '  return `${this.firstName()} ${this.surname()}`;',
      active: true,
    },
    { line: '});', active: true },
  ]);
}
