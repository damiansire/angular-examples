import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableSignalsComponent } from './signals/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/2-computed-signals/computed-signals.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/3-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { ComputedSignalDynamicDependenciesComponent } from './signals/4-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { EffectComponent } from './signals/5-effect/effect.component';
import { DestroyEffectComponent } from './signals/6-interval-when-is-destroy/destroy-effect.component';

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
    ComputedSignalDynamicDependenciesComponent,
    EffectComponent,
    DestroyEffectComponent,
  ],
})
export class AppComponent {
  title = 'angular-examples';
}
