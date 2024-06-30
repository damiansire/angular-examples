import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ComputedTrackerComponent } from '../../components/computed-tracker/computed-tracker.component';
import { ClickInButton } from '../../components/component.interface';

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  templateUrl: './multiples-signals-evaluated.component.html',
  styleUrl: './multiples-signals-evaluated.css',
  imports: [CommonModule, ProfileCardComponent, ComputedTrackerComponent],
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: ClickInButton[] = [];

  addComputedSignal(data: Date, index: number) {
    //this.computedTracker[index].push(data);
  }
}
