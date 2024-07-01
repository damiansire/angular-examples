import { Component, Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-dependencies-status',
  standalone: true,
  imports: [],
  templateUrl: './dependencies-status.component.html',
  styleUrl: './dependencies-status.component.css',
})
export class DependenciesStatusComponent {
  @Input() dependencies: Signal<string[]> = signal([]);
  @Input() signalsInside: Signal<string[]> = signal([]);
  @Input() computedName: string = '';
}
