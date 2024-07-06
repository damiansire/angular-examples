import { Routes } from '@angular/router';
import { WritableSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/3-computed-signals/computed-signals.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/5-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { ComputedSignalDynamicDependenciesComponent } from './signals/4-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { EffectComponent } from './signals/6-effect/effect.component';
import { DestroyEffectComponent } from './signals/7-interval-when-is-destroy/destroy-effect.component';
import { EffectDestroyComponent } from './signals/8-effect-destroy/effect-destroy.component';
import { SignalEqualityFunctionsComponent } from './signals/9-signal-equality-functions/signal-equality-functions.component';
import { UpdateSignalComponent } from './signals/2-update-signal/update-signal.component';

export const routes: Routes = [
  { path: '', redirectTo: '1', pathMatch: 'full' },
  { path: '1', component: WritableSignalsComponent },
  { path: '2', component: UpdateSignalComponent },
  { path: '3', component: ComputedSignalsComponent },
  { path: '4', component: ComputedSignalsLazilyEvaluatedMemoizedComponent },
  { path: '5', component: ComputedSignalDynamicDependenciesComponent },
  { path: '6', component: EffectComponent },
  { path: '7', component: DestroyEffectComponent },
  { path: '8', component: EffectDestroyComponent },
  { path: '9', component: SignalEqualityFunctionsComponent },
];
