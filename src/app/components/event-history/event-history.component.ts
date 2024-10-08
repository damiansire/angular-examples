import { Component, Input, Signal, signal } from '@angular/core';
import { HistoryElement } from '../component.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-history.component.html',
  styleUrl: './event-history.component.css',
})
export class EventHistoryComponent {
  @Input() title = 'text';
  @Input() stateName = 'Count';
  @Input() history: Signal<HistoryElement[]> = signal([]);
  beforeNumber(value: string | number): number {
    return Number(value) - 1;
  }
}
