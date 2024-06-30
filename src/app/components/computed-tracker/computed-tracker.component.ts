import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface outputData {
  date: Date;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-computed-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './computed-tracker.component.html',
  styleUrl: './computed-tracker.component.css',
})
export class ComputedTrackerComponent {
  @Input() computedTracker: outputData[][] = [];
}
