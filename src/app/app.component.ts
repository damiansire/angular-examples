import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableSignalsComponent } from './signals/1-writable-signals/writable-signals.component';
import { ComputedSignalsComponent } from './signals/2-computed-signals/computed-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, WritableSignalsComponent, ComputedSignalsComponent],
})
export class AppComponent {
  title = 'angular-examples';
}
