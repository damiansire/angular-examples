import { Component, Input } from '@angular/core';
import { CustomRoute } from '../../../../app.routes';
import { LevelState } from '../../../component.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-sub-level-option',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-sub-level-option.component.html',
  styleUrl: './menu-sub-level-option.component.css',
})
export class MenuSubLevelOptionComponent {
  @Input() item: CustomRoute = {
    path: '',
    component: undefined,
    id: '',
    subLevels: [],
  };

  @Input() levelState: LevelState = 'pending';
}
