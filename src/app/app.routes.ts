import { Routes } from '@angular/router';
import { WritableSignalsComponent } from './signals/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/2-computed-signals/computed-signals.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/3-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { ComputedSignalDynamicDependenciesComponent } from './signals/4-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { EffectComponent } from './signals/5-effect/effect.component';
import { DestroyEffectComponent } from './signals/6-interval-when-is-destroy/destroy-effect.component';
import { EffectDestroyComponent } from './signals/7-effect-destroy/effect-destroy.component';
import { SignalEqualityFunctionsComponent } from './signals/signal-equality-functions/signal-equality-functions.component';

export const routes: Routes = [
  { path: '1', component: WritableSignalsComponent },
  { path: '2', component: ComputedSignalsComponent },
  { path: '3', component: ComputedSignalsLazilyEvaluatedMemoizedComponent },
  { path: '4', component: ComputedSignalDynamicDependenciesComponent },
  { path: '5', component: EffectComponent },
  { path: '6', component: DestroyEffectComponent },
  { path: '7', component: EffectDestroyComponent },
  { path: '8', component: SignalEqualityFunctionsComponent },
];
