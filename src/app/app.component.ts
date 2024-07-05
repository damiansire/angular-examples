import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WritableSignalsComponent } from './signals/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/3-computed-signals/computed-signals.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/5-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { ComputedSignalDynamicDependenciesComponent } from './signals/4-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { EffectComponent } from './signals/6-effect/effect.component';
import { DestroyEffectComponent } from './signals/7-interval-when-is-destroy/destroy-effect.component';
import { EffectDestroyComponent } from './signals/8-effect-destroy/effect-destroy.component';
import { SignalEqualityFunctionsComponent } from './signals/9-signal-equality-functions/signal-equality-functions.component';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { UpdateSignalComponent } from './signals/2-update-signal/update-signal.component';
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
