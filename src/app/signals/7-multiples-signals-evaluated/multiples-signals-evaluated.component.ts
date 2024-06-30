import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ComputedTrackerComponent } from '../../components/computed-tracker/computed-tracker.component';

interface outputData {
  date: Date;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  templateUrl: './multiples-signals-evaluated.component.html',
  styleUrl: './multiples-signals-evaluated.css',
  imports: [CommonModule, ProfileCardComponent, ComputedTrackerComponent],
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: outputData[][] = [[], [], []];

  addComputedSignal(data: outputData, index: number) {
    this.computedTracker[index].push(data);
  }
}
