import { Routes } from '@angular/router';
import { WritableSignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/1-writable-signals/writable-signals.component';
import { UpdateSignalComponent } from './signals/level-1-interaction-with-signals/sub-levels/2-update-signal/update-signal.component';
import { RouteItem } from './components/component.interface';
import { InteractionWithSignalsComponent } from './signals/level-1-interaction-with-signals/interaction-with-signals.component';
import { ReadOnlySignalsComponent } from './signals/level-1-interaction-with-signals/sub-levels/read-only-signals/read-only-signals.component';

const signalsRoutesTree: RouteItem[] = [
  {
    path: '1',
    component: InteractionWithSignalsComponent,
    subLevels: [
      { path: '1', component: WritableSignalsComponent },
      { path: '2', component: UpdateSignalComponent },
      { path: '3', component: ReadOnlySignalsComponent },
    ],
  },
];

function generateRoutes(routesTree: RouteItem[]) {
  let allRoutes = [];
  let relativeRoute = `signals/level`;
  for (let route of routesTree) {
    const element = {
      path: `${relativeRoute}/${route.path}`,
      component: route.component,
    };
    allRoutes.push(element);
    relativeRoute = `${relativeRoute}/sub-level`;
    for (let subLevel of route.subLevels || []) {
      const element = {
        path: `${relativeRoute}/${subLevel.path}`,
        component: subLevel.component,
      };
      allRoutes.push(element);
    }
  }
  return allRoutes;
}

const allRoutes = generateRoutes(signalsRoutesTree);

console.log(allRoutes);
export const routes: Routes = [...allRoutes];
