import { Component, Input } from '@angular/core';
import { CustomRoute } from '../../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-option',
  standalone: true,
  imports: [RouterModule],
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
}
