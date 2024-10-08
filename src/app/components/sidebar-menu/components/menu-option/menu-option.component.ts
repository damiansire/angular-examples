import { Component, Input } from '@angular/core';
import { CustomRoute } from '../../../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LevelState } from '../../../component.interface';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.css',
})
export class MenuOptionComponent {
  @Input({ required: true }) menuItem: CustomRoute = {
    path: '',
    component: undefined,
    id: '',
    subLevels: [],
  };
  @Input() levelState: LevelState = 'pending';
  getLink(menuItemPath: string) {
    return `${menuItemPath}/sub-level/1`;
  }
}
