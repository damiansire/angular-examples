import { Component, EventEmitter, Output, effect, signal } from '@angular/core';
import { InputComponent } from '../../../components-atom/input/input.component';
import { ButtonComponent } from '../../../components-atom/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destroy-box',
  standalone: true,
  templateUrl: './destroy-box.component.html',
  styleUrl: './destroy-box.component.css',
  imports: [InputComponent, ButtonComponent, CommonModule],
})
export class DestroyBoxComponent {
  @Output() autoRefreshEvent = new EventEmitter<boolean>();
  currentTime = new Date();
  autoRefresh = signal(false);
  intervalSave: any;
  constructor() {
    effect(() => {
      if (this.autoRefresh()) {
        this.intervalSave = setInterval(() => {
          this.currentTime = new Date();
          console.log('Estoy aca');
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
