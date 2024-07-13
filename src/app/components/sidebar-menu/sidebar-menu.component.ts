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
  addLevel(level: string, subLevel: string) {
    if (this.levelHistory[level] === undefined) {
      this.levelHistory[level] = {};
    }
    if (subLevel) {
      this.levelHistory[level][subLevel] = 'win';
    } else {
      this.levelHistory[level]['state'] = 'win';
    }
  }
  getLevelStatus(level: string, subLevel: string | undefined) {
    if (
      this.currentLevel.level === level &&
      this.currentLevel.subLevel === subLevel
    ) {
      return 'currentLevel';
    }
    if (subLevel === undefined) {
      if (!this.levelHistory[level]?.state) {
        return 'pending';
      }
      return this.levelHistory[level]?.state || 'pending';
    }

    return this.levelHistory[level]?.[subLevel] || 'pending';
  }
  setCurrentLevel(level: string, subLevel: string) {
    this.currentLevel = { level, subLevel };
    this.addLevel(level, subLevel);
  }
  isPartOfCurrentLevel(level: string) {
    return this.currentLevel.level === level;
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
