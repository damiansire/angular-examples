import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-computed-signals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css',
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
}
