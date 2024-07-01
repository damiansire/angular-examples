import { Component, computed, effect, signal } from '@angular/core';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';
import { VariableBoxComponent } from '../../components-atom/variable-box/variable-box.component';
import { HistoryElement } from '../../components/component.interface';
import { EventHistoryComponent } from '../../components/event-history/event-history.component';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-effect',
  standalone: true,
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css',
  imports: [CodeComponent, VariableBoxComponent, EventHistoryComponent],
})
export class EffectComponent {
  count = signal(0);
  appEventHistory = signal<HistoryElement[]>([]);
  constructor() {
    effect(
      () => {
        const trigger =
          this.count() === 0 ? 'Initial render' : 'Increment Count';
        this.addConditionalCountRecomputation(trigger, 'Void', false);
        console.log(`The current count is: ${this.count()}`);
      },
      { allowSignalWrites: true }
    );
  }
  lines = computed<codeLine[]>(() => [
    { line: 'effect(() => {', active: false },
    {
      line: '  console.log(`The current count is: ${count()}`);',
      active: false,
    },
    { line: '});', active: false },
  ]);
  upCount() {
    this.count.update((currentCount: number) => currentCount + 1);
  }
  addConditionalCountRecomputation(
    trigger: string,
    newState: number | string,
    isCountIncrement: boolean
  ) {
    this.appEventHistory.update((prevHistory) => {
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
}
