import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteItem } from '../component.interface';
import { CommonModule } from '@angular/common';
import { InteractionWithSignalsComponent } from '../../signals/level-1-interaction-with-signals/interaction-with-signals.component';
import { WritableSignalsComponent } from '../../signals/level-1-interaction-with-signals/sub-levels/1-writable-signals/writable-signals.component';
import { UpdateSignalComponent } from '../../signals/level-1-interaction-with-signals/sub-levels/2-update-signal/update-signal.component';
import { ReadOnlySignalsComponent } from '../../signals/level-1-interaction-with-signals/sub-levels/read-only-signals/read-only-signals.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  components: RouteItem[] = [
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
}
