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

interface CustomRoute {
  path: string;
  component: any;
  id: string;
  subLevels?: CustomRoute[];
}

function generateRoutes(routesTree: RouteItem[]) {
  let allRoutes: CustomRoute[] = [];
  let relativeRoute = `signals/level`;
  for (let route of routesTree) {
    const element: CustomRoute = {
      path: `${relativeRoute}/${route.path}`,
      component: route.component,
      id: route.path,
    };
    relativeRoute = `${relativeRoute}/sub-level`;
    const subLevels =
      route.subLevels?.map((subLevel) => {
        return {
          path: `${relativeRoute}/${subLevel.path}`,
          component: subLevel.component,
          id: subLevel.path,
        };
      }) || [];
    element.subLevels = subLevels;
    allRoutes = [...allRoutes, element, ...subLevels];
  }
  return allRoutes;
}

const allRoutes = generateRoutes(signalsRoutesTree);
export const routes: Routes = allRoutes;
export const menuItems = allRoutes;
