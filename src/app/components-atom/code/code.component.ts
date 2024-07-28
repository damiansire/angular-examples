import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { CodeLine } from '../component-atom.interface';
import { spliteInTags } from '../../libs/code-parser';

type TailwindTextSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
})
export class CodeComponent {
  @Input() textSize: TailwindTextSize = 'text-2xl';
  @Input() lines: Signal<CodeLine[]> = signal([]);
  @Output() lineClick = new EventEmitter<string>();

  /*
  linesWithColor = computed(() => {
    const linesWithColor = [];
    for (const codeLine of this.lines()) {
      const data = spliteInTags(codeLine);
    }
  });
  */
  onLineClick(line: CodeLine) {
    this.lineClick.emit(line.id); // Emit the line's ID
  }
}
/*
const regex = /(<\/?\w+>)/g; // Expresión regular para encontrar etiquetas
const result = htmlString.split(regex).filter(Boolean);
*/
