import { Component } from '@angular/core';
import { InputComponent } from '../../../components-atom/input/input.component';
import { ButtonComponent } from '../../../components-atom/button/button.component';

@Component({
  selector: 'app-destroy-box',
  standalone: true,
  templateUrl: './destroy-box.component.html',
  styleUrl: './destroy-box.component.css',
  imports: [InputComponent, ButtonComponent],
})
export class DestroyBoxComponent {}
