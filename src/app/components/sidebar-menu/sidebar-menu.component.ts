import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomRoute, menuItems } from '../../app.routes';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { MenuSubLevelOptionComponent } from './components/menu-sub-level-option/menu-sub-level-option.component';
import { MenuSeparatorComponent } from './components/menu-separator/menu-separator.component';

type LevelState = 'win' | 'pending' | 'current';

interface CurrentLevel {
  level: string;
  subLevel: string | null;
}

interface Level {
  state: LevelState;
  subLevels: LevelHistory;
}

interface LevelHistory {
  [key: string]: Level;
}

class HandlerLevelStatus {
  levelHistory: LevelHistory = {};
  currentLevel: CurrentLevel = { level: '1', subLevel: null };
  constructor(menuItems: CustomRoute[]) {
    this.setLevelHistory(menuItems);
  }
  setWinLevel(level: string, subLevel: string) {
    this.setLevelState(level, subLevel, 'win');
  }
  private setLevelState(
    level: string,
    subLevel: string | undefined,
    state: LevelState
  ) {
    const isInvalidLevel = this.levelHistory[level] === undefined;
    const isInvalidSubLevel =
      subLevel !== undefined &&
      this.levelHistory[level].subLevels[subLevel].state;
    if (isInvalidLevel && isInvalidSubLevel) {
      throw Error(`[${level},${subLevel}] Is invalidad level`);
    }
    if (subLevel === undefined) {
      this.levelHistory[level].state = state;
    } else {
      this.levelHistory[level].subLevels[subLevel].state = state;
    }
  }
  private setLevelHistory(menuItems: CustomRoute[]) {
    for (const levelItem of menuItems) {
      this.levelHistory[levelItem.id] = {
        state: 'pending',
        subLevels: {},
      };
      for (const subLevelItem of levelItem.subLevels) {
        this.levelHistory[levelItem.id].subLevels[subLevelItem.id] = {
          state: 'pending',
          subLevels: {},
        };
      }
    }
  }
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuOptionComponent,
    MenuSubLevelOptionComponent,
    MenuSeparatorComponent,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  private router = inject(Router);
  menuItems: CustomRoute[] = menuItems;
  //TODO: Create the class before and start with created object based in routes
  levelHandler = new HandlerLevelStatus();
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let finalUrl = event.url;
        if (event.urlAfterRedirects != event.url) {
          finalUrl = event.urlAfterRedirects;
        }
        const routePart = finalUrl.split('/');
        this.levelHandler.setCurrentLevel(routePart[3], routePart[5]);
      }
    });
  }
  getMenuOptionStatus(level: string, subLevel: string | undefined) {
    return this.levelHandler.getLevelStatus(level, subLevel);
  }
  showSubMenu(menuId: string) {
    return this.levelHandler.isPartOfCurrentLevel(menuId);
  }
}
