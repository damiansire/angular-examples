import { Component } from '@angular/core';
import { DestroyBoxComponent } from './destroy-box/destroy-box.component';

@Component({
  selector: 'app-destroy-effect',
  standalone: true,
  templateUrl: './destroy-effect.component.html',
  styleUrl: './destroy-effect.component.css',
  imports: [DestroyBoxComponent],
})
export class DestroyEffectComponent {}
