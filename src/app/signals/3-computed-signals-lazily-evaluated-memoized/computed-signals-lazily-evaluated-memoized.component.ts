import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  imports: [],
  templateUrl: './computed-signals-lazily-evaluated-memoized.component.html',
  styleUrl: './computed-signals-lazily-evaluated-memoized.component.css',
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: Date[] = [];
  firstName: WritableSignal<string> = signal('Damian');
  lastName: WritableSignal<string> = signal('Sire');
  fullName: Signal<string> = computed(() => {
    this.computedTracker.push(new Date());
    return `${this.firstName()} ${this.lastName()}`;
  });

  setFirstName(eventTarget: any) {
    const value = eventTarget?.value || '';
    this.firstName.set(value);
  }

  setLastName(eventTarget: any) {
    const value = eventTarget?.value || '';
    this.lastName.set(value);
  }
}
