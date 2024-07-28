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
import { CodeLine, CodeLineElement } from '../component-atom.interface';
import { isTag, spliteInTags } from '../../libs/code-parser';

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
  codeExample = ` <main> 
     <section> 
       <h2>  Introduction  </h2> 
       <p>  This is a simple example 
        
        of a DOM tree  </p> 
     </section> 
     <article> 
       <h3>  Article Title  </h3> 
       <p>  Some interesting content here.  </p> 
     </article> 
 </main> `;

  codeLines: CodeLine[] = this.parseCode(this.codeExample);

  parseCode(code: string): CodeLine[] {
    const parsedCode = [];
    const lines = code.split('\n');
    for (const line of lines) {
      const elementInLine = spliteInTags(line);
      const codeLineElements: CodeLineElement[] = elementInLine.map((text) => {
        return {
          text,
          color: isTag(text),
        };
      });
      const newElement: CodeLine = {
        elements: codeLineElements,
        active: false,
        id: 'algo',
      };
      parsedCode.push(newElement);
    }
    return parsedCode;
  }

  onLineClick(line: CodeLine) {
    this.lineClick.emit(line.id);
  }
}
