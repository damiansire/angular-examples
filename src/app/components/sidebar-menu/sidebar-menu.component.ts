import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WritableSignalsComponent } from '../../signals/level-1-interaction-with-signals/sub-levels/1-writable-signals/writable-signals.component';
import { UpdateSignalComponent } from '../../signals/level-1-interaction-with-signals/sub-levels/2-update-signal/update-signal.component';
import { ComputedSignalsComponent } from '../../signals/level-2-computed-signals/computed-signals.component';
import { ComputedSignalDynamicDependenciesComponent } from '../../signals/level-2-computed-signals/sub-levels/2-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from '../../signals/level-2-computed-signals/sub-levels/3-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { EffectComponent } from '../../signals/level-3-effect/sub-levels/1-effect/effect.component';
import { DestroyEffectComponent } from '../../signals/level-3-effect/sub-levels/2-interval-when-is-destroy/destroy-effect.component';
import { EffectDestroyComponent } from '../../signals/level-3-effect/sub-levels/5-effect-destroy/effect-destroy.component';
import { SignalEqualityFunctionsComponent } from '../../signals/level-4-signal-equality-functions/signal-equality-functions.component';
import { MenuLevelItem } from '../component.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  components: MenuLevelItem[] = [
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
