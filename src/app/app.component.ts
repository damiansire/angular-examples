import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableSignalsComponent } from './signals/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/2-computed-signals/computed-signals.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/3-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    WritableSignalsComponent,
    ComputedSignalsComponent,
    ComputedSignalsLazilyEvaluatedMemoizedComponent,
  ],
})
export class AppComponent {
  title = 'angular-examples';
}
