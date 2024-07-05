import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selection-option',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selection-option.component.html',
  styleUrl: './selection-option.component.css',
})
export class SelectionOptionComponent {
  @Output() selectedLevelChange = new EventEmitter<number>();

  levels = [1, 2, 3, 4];
  selectedLevel = this.levels[0]; // Nivel inicial

  selectLevel(level: number) {
    this.selectedLevel = level;
    this.selectedLevelChange.emit(this.selectedLevel);
  }
}
