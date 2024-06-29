import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableSignalsComponent } from './signals/writable-signals/writable-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, WritableSignalsComponent],
})
export class AppComponent {
  title = 'angular-examples';
}
