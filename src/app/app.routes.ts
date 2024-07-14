import { Routes } from '@angular/router';
import { WritableSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/1-writable-signals/writable-signals.component';
import { UpdateSignalComponent } from './signals/level-1-interaction-with-signals/sub-levels/2-update-signal/update-signal.component';
import { RouteItem } from './components/component.interface';
import { InteractionWithSignalsComponent } from './signals/level-1-interaction-with-signals/interaction-with-signals.component';
import { ReadOnlySignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/read-only-signals/read-only-signals.component';
import { ComputedSignalsLevelComponent } from './signals/level-2-computed-signals/computed-signals.component';
import { ComputedSignalDynamicDependenciesComponent } from './signals/level-2-computed-signals/sub-levels/2-computed-signal-dynamic-dependencies/computed-signal-dynamic-dependencies.component';
import { ComputedSignalsLazilyEvaluatedMemoizedComponent } from './signals/level-2-computed-signals/sub-levels/3-computed-signals-lazily-evaluated-memoized/computed-signals-lazily-evaluated-memoized.component';
import { ComputedSignalsComponent } from './signals/level-2-computed-signals/sub-levels/1-computed-signals/computed-signals.component';
import { EffectComponent } from './signals/level-3-effect/sub-levels/1-effect/effect.component';
import { DestroyEffectComponent } from './signals/level-3-effect/sub-levels/2-interval-when-is-destroy/destroy-effect.component';
import { IntervalManualDestructionComponent } from './signals/level-3-effect/sub-levels/3-interval-manual-destruction/interval-manual-destruction.component';
import { EffectManualDestructionComponent } from './signals/level-3-effect/sub-levels/4-effect-manual-destruction/effect-manual-destruction.component';
import { EffectDestroyComponent } from './signals/level-3-effect/sub-levels/5-effect-destroy/effect-destroy.component';
import { SignalEqualityFunctionsComponent } from './signals/level-4-signal-equality-functions/signal-equality-functions.component';
import { EffectLevelComponent } from './signals/level-3-effect/effect-level.component';
import { WhatIsSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/what-is-signals/what-is-signals.component';
import { CreateNewSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/create-new-signals/create-new-signals.component';
import { TypesOfSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/types-of-signals/types-of-signals.component';

const signalsRoutesTree: RouteItem[] = [
  {
    path: '1',
    component: InteractionWithSignalsComponent,
    subLevels: [
      { path: '1', component: WhatIsSignalsComponent },
      { path: '2', component: TypesOfSignalsComponent },
      { path: '1', component: CreateNewSignalsComponent },
      { path: '1', component: WritableSignalsComponent },
      { path: '2', component: UpdateSignalComponent },
      { path: '6', component: ReadOnlySignalsComponent },
    ],
  },
  {
    path: '2',
    component: ComputedSignalsLevelComponent,
    subLevels: [
      { path: '1', component: ComputedSignalsComponent },
      { path: '2', component: ComputedSignalDynamicDependenciesComponent },
      { path: '3', component: ComputedSignalsLazilyEvaluatedMemoizedComponent },
    ],
  },
  {
    path: '3',
    component: EffectLevelComponent,
    subLevels: [
      { path: '1', component: EffectComponent },
      { path: '2', component: DestroyEffectComponent },
      { path: '3', component: IntervalManualDestructionComponent },
      { path: '4', component: EffectManualDestructionComponent },
      { path: '3', component: EffectDestroyComponent },
    ],
  },
  {
    path: '4',
    component: SignalEqualityFunctionsComponent,
    subLevels: [{ path: '1', component: SignalEqualityFunctionsComponent }],
  },
];

export interface CustomRoute {
  path: string;
  component: any;
  id: string;
  subLevels: CustomRoute[];
}

function generateRoutes(routesTree: RouteItem[]) {
  let allRoutes: CustomRoute[] = [];
  let baseRoutes = [];
  for (let route of routesTree) {
    let relativeRoute = `signals/level/${route.path}`;
    const element: CustomRoute = {
      path: relativeRoute,
      component: route.component,
      id: route.path,
      subLevels: [],
    };
    relativeRoute = `${relativeRoute}/sub-level`;
    const subLevels =
      route.subLevels?.map((subLevel) => {
        return {
          path: `${relativeRoute}/${subLevel.path}`,
          component: subLevel.component,
          id: subLevel.path,
          subLevels: [],
        };
      }) || [];
    element.subLevels = subLevels;
    baseRoutes.push(element);
    allRoutes = [...allRoutes, element, ...subLevels];
  }
  return { allRoutes, baseRoutes };
}

const { allRoutes, baseRoutes } = generateRoutes(signalsRoutesTree);
export const routes: Routes = [
  ...allRoutes,
  { path: '', redirectTo: '/signals/level/1/sub-level/1', pathMatch: 'full' },
];
export const menuItems = baseRoutes;
