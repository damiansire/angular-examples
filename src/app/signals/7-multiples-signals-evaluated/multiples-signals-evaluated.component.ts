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
import { ProfileCardComponent } from '../component/profile-card/profile-card.component';

interface outputData {
  date: Date;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './multiples-signals-evaluated.component.html',
  styleUrl: './multiples-signals-evaluated.css',
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: outputData[][] = [[], [], []];

  addComputedSignal(data: outputData, index: number) {
    this.computedTracker[index].push(data);
  }
}
