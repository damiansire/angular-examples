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
  lastName: WritableSignal<string> = signal('Sire');
  fullName: Signal<string> = computed(
    () => `${this.firstName()} ${this.lastName()}`
  );

  setFirstName(eventTarget: any) {
    const value = eventTarget?.value || '';
    this.firstName.set(value);
  }

  setLastName(eventTarget: any) {
    const value = eventTarget?.value || '';
    this.lastName.set(value);
  }
}
