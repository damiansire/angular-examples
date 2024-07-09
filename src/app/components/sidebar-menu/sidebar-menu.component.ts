import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomRoute, menuItems } from '../../app.routes';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuOptionComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  menuItems: CustomRoute[] = menuItems;

  constructor() {
    console.log(this.menuItems);
  }
}
