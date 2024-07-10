import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomRoute, menuItems } from '../../app.routes';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';

class HandlerLevelStatus {
  levelHistory: any;
  currentLevel: { level: string; subLevel: string };
  constructor() {
    this.levelHistory = {};
    this.currentLevel = {
      level: '1',
      subLevel: '2',
    };
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

    return this.levelHistory[level][subLevel] || 'pending';
  }
  setCurrentLevel(level: string, subLevel: string) {
    this.currentLevel = { level, subLevel };
    this.addLevel(level, subLevel);
  }
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuOptionComponent],
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
        const routePart = event.url.split('/');
        this.levelHandler.setCurrentLevel(routePart[3], routePart[5]);
      }
    });
  }
  getMenuOptionStatus(level: string, subLevel: string | undefined) {
    return this.levelHandler.getLevelStatus(level, subLevel);
  }
}
