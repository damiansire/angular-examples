import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WritableSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/level-2-computed-signals/sub-levels/1-computed-signals/computed-signals.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/level-2-computed-signals/sub-levels/3-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { CommonModule } from '@angular/common';
import { UpdateSignalComponent } from './signals/level-1-interaction-with-signals/sub-levels/2-update-signal/update-signal.component';
import { ComputedSignalDynamicDependenciesComponent } from './signals/level-2-computed-signals/sub-levels/2-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { EffectComponent } from './signals/level-3-effect/sub-levels/1-effect/effect.component';
import { DestroyEffectComponent } from './signals/level-3-effect/sub-levels/2-interval-when-is-destroy/destroy-effect.component';
import { EffectDestroyComponent } from './signals/level-3-effect/sub-levels/5-effect-destroy/effect-destroy.component';
import { SignalEqualityFunctionsComponent } from './signals/level-4-signal-equality-functions/signal-equality-functions.component';
interface ComponentItem {
  path: string;
  component: any; // Asegúrate de importar tus componentes
}

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
    EffectDestroyComponent,
    SignalEqualityFunctionsComponent,
    CommonModule,
    RouterModule,
  ],
})
export class AppComponent {
  title = 'angular-examples';
  components: ComponentItem[] = [
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
}
