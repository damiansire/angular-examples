import { Component, computed, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-computed-signal-dynamic-dependencies',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal-dynamic-dependencies.component.html',
  styleUrl: './computed-signal-dynamic-dependencies.component.css',
})
export class ComputedSignalDynamicDependenciesComponent {
  showCount = signal(false);
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });
  upCount() {
    this.count.update((currentCount: number) => currentCount + 1);
  }
  onShowCountChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newValue = target.value === 'true';
    this.showCount.set(newValue);
  }
}
