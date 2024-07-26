import { Component } from '@angular/core';
import { TitleComponent } from '../../../../components-atom/title/title.component';
import { WrapperAnimationComponent } from './wrapper-animation/wrapper-animation.component';
import { DrawPreviewComponent } from '../../../../components/draw-preview/draw-preview.component';

@Component({
  selector: 'app-what-is-signals',
  standalone: true,
  imports: [TitleComponent, WrapperAnimationComponent, DrawPreviewComponent],
  templateUrl: './what-is-signals.component.html',
  styleUrl: './what-is-signals.component.css',
})
export class WhatIsSignalsComponent {
  title = 'What are signals?';
}
