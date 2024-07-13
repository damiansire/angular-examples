import { Component } from '@angular/core';
import { TitleComponent } from '../../../../components-atom/title/title.component';

@Component({
  selector: 'app-what-is-signals',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './what-is-signals.component.html',
  styleUrl: './what-is-signals.component.css',
})
export class WhatIsSignalsComponent {
  title = 'What are signals?';
}
