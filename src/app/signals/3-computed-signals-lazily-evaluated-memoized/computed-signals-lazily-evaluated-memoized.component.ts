import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { ComputedTrackerComponent } from '../../components/computed-tracker/computed-tracker.component';

interface ClickInButton {
  date: Date;
  firstName: string;
  surname: string;
}

@Component({
  selector: 'app-computed-signals-lazily-evaluated-memoized',
  standalone: true,
  templateUrl: './computed-signals-lazily-evaluated-memoized.component.html',
  styleUrl: './computed-signals-lazily-evaluated-memoized.component.css',
  imports: [ProfileCardComponent, ComputedTrackerComponent],
})
export class ComputedSignalsLazilyEvaluatedMemoizedComponent {
  computedTracker: ClickInButton[] = [];
  clicksInTheButton: ClickInButton[] = [];

  addComputedSignal(data: ClickInButton, index: number) {
    this.computedTracker.push(data);
  }

  setValue(event: ClickInButton) {
    this.clicksInTheButton.push(event);
  }
}
