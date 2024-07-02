import { Component, computed, signal } from '@angular/core';
import { DestroyBoxComponent } from './destroy-box/destroy-box.component';
import { codeLine } from '../../components-atom/component-atom.interface';
import { CodeComponent } from '../../components-atom/code/code.component';

@Component({
  selector: 'app-destroy-effect',
  standalone: true,
  templateUrl: './destroy-effect.component.html',
  styleUrl: './destroy-effect.component.css',
  imports: [DestroyBoxComponent, CodeComponent],
})
export class DestroyEffectComponent {
  autoRefresh = signal(false);
  lines = computed<codeLine[]>(() => [
    {
      line: 'constructor() {',
      active: false,
    },
    {
      line: '  effect(() => {',
      active: false,
    },
    {
      line: '    if (this.autoRefresh()) {',
      active: this.autoRefresh(),
    },
    {
      line: '      this.intervalSave = setInterval(() => {',
      active: this.autoRefresh(),
    },
    {
      line: '        this.currentTime = new Date();',
      active: this.autoRefresh(),
    },
    {
      line: '        console.log("Estoy aca");',
      active: this.autoRefresh(),
    },
    {
      line: '      }, 1000);',
      active: this.autoRefresh(),
    },
    {
      line: '    } else {',
      active: !this.autoRefresh(),
    },
    {
      line: '      clearInterval(this.intervalSave);',
      active: !this.autoRefresh(),
    },
    {
      line: '    }',
      active: false,
    },
    {
      line: '  });',
      active: false,
    },
    {
      line: '}',
      active: false,
    },
  ]);

  showComponent = true;
  destroy() {
    this.showComponent = false;
  }
  setAutoRefresh(event: boolean) {
    this.autoRefresh.set(event);
  }
}
