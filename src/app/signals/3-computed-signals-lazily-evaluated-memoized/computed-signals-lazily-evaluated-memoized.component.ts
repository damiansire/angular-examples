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
import { ProfileCardComponent } from './profile-card/profile-card.component';

interface outputData {
  date: Date;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './computed-signals-lazily-evaluated-memoized.component.html',
  styleUrl: './computed-signals-lazily-evaluated-memoized.component.css',
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: outputData[][] = [[], [], []];

  addComputedSignal(data: outputData, index: number) {
    this.computedTracker[index].push(data);
  }
}
