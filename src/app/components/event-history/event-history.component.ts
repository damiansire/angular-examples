import { Component, Input, Signal, signal } from '@angular/core';
import { historyElement } from '../component.interface';

@Component({
  selector: 'app-event-history',
  standalone: true,
  imports: [],
  templateUrl: './event-history.component.html',
  styleUrl: './event-history.component.css',
})
export class EventHistoryComponent {
  @Input() title = 'text';
  @Input() history: Signal<historyElement[]> = signal([]);
}
