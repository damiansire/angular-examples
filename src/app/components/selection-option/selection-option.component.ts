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
  @Output() selectedLevelChange = new EventEmitter<string>();

  levels = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4'];
  selectedLevel = this.levels[0]; // Nivel inicial

  selectLevel(level: string) {
    this.selectedLevel = level;
    this.selectedLevelChange.emit(this.selectedLevel);
  }
}
