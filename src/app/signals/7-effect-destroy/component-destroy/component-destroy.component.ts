import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, effect, signal } from '@angular/core';

@Component({
  selector: 'app-component-destroy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-destroy.component.html',
  styleUrl: './component-destroy.component.css',
})
export class ComponentDestroyComponent {
  @Output() autoRefreshEvent = new EventEmitter<boolean>();
  @Output() newIntervalOutput = new EventEmitter<Date>();
  currentTime = new Date();
  autoRefresh = signal(false);
  intervalSave: any;
  constructor() {
    effect(() => {
      if (this.autoRefresh()) {
        this.intervalSave = setInterval(() => {
          console.log('Sigo aca');
          this.currentTime = new Date();
          this.newIntervalOutput.emit(this.currentTime);
        }, 1000);
      } else {
        clearInterval(this.intervalSave);
      }
    });
  }

  refreshTime() {
    this.currentTime = new Date();
  }
  toggleAutoRefresh() {
    this.autoRefreshEvent.emit(!this.autoRefresh());
    this.autoRefresh.set(!this.autoRefresh());
  }
}
