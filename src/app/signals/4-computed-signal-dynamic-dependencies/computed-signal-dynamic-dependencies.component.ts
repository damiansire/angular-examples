import { Component, Signal, computed, signal } from '@angular/core';
import { count } from 'rxjs';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { CommonModule } from '@angular/common';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';
import { VariableBoxComponent } from '../../components-atom/variable-box/variable-box.component';
import { EventHistoryComponent } from '../../components/event-history/event-history.component';
import { DependenciesStatusComponent } from '../../components/dependencies-status/dependencies-status.component';
import { HistoryElement } from '../../components/component.interface';

@Component({
  selector: 'app-computed-signal-dynamic-dependencies',
  standalone: true,
  templateUrl: './computed-signal-dynamic-dependencies.component.html',
  styleUrl: './computed-signal-dynamic-dependencies.component.css',
  imports: [
    ButtonComponent,
    CommonModule,
    CodeComponent,
    VariableBoxComponent,
    EventHistoryComponent,
    DependenciesStatusComponent,
  ],
})
export class ComputedSignalDynamicDependenciesComponent {
  showCount = signal(false);
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });
  conditionalCountHistory = signal<HistoryElement[]>([]);
  appEventHistory = signal<HistoryElement[]>([]);
  dependencies = computed<string[]>(() => {
    return this.showCount() ? ['showCount', 'count'] : ['showCount'];
  });
  signalsInside = signal(['showCount', 'count']);
  lines = computed<codeLine[]>(() => [
    { line: 'const showCount = signal(false);', active: false },
    { line: 'const count = signal(0);', active: false },
    { line: 'const conditionalCount = computed(() => {', active: false },
    { line: '  if (showCount()) {', active: true },
    {
      line: '    return `The count is ${count()}.`;',
      active: this.showCount(),
    },
    { line: '  } else {', active: false },
    { line: "    return 'Nothing to see here!';", active: !this.showCount() },
    { line: '  }', active: false },
    { line: '});', active: false },
  ]);
  upCount() {
    this.count.update((currentCount: number) => currentCount + 1);
    if (this.showCount()) {
      this.addConditionalCountRecomputation(
        'count',
        this.conditionalCount(),
        false
      );
    }
    this.addCountRecomputation('count', this.count());
  }
  onShowCountChange() {
    this.showCount.set(!this.showCount());
    this.addConditionalCountRecomputation(
      'showCount',
      this.conditionalCount(),
      false
    );
  }

  addConditionalCountRecomputation(
    trigger: string,
    newState: number | string,
    isCountIncrement: boolean
  ) {
    this.conditionalCountHistory.update((prevHistory) => {
      const newHistory = prevHistory.length ? [...prevHistory] : [];
      newHistory.push({
        date: new Date(),
        trigger,
        newState,
        isCountIncrement,
      });
      return newHistory;
    });
  }

  addCountRecomputation(trigger: string, newState: number | string) {
    this.appEventHistory.update((prevHistory) => {
      const newHistory = prevHistory.length ? [...prevHistory] : [];
      newHistory.push({
        date: new Date(),
        trigger,
        newState,
        isCountIncrement: true,
      });
      return newHistory;
    });
  }
}
