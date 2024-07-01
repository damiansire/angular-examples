import { Component, computed, signal } from '@angular/core';
import { count } from 'rxjs';
import { ButtonComponent } from '../../components-atom/button/button.component';
import { CommonModule } from '@angular/common';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';
import { VariableBoxComponent } from '../../components-atom/variable-box/variable-box.component';
import { EventHistoryComponent } from '../../components/event-history/event-history.component';
import { DependenciesStatusComponent } from '../../components/dependencies-status/dependencies-status.component';

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
  count = signal(0);
  trackerHistory = signal<{ date: Date }[]>([]);
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
  onShowCountChange() {
    this.showCount.set(!this.showCount());
  }
}
