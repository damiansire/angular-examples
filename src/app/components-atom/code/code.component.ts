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
import {
  isTag,
  spliteInTags,
  HtmlIdGeneratorService,
} from '../../libs/code-parser';

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
  //@deprecated
  @Input() lines: Signal<CodeLine[]> = signal([]);
  @Input() textSize: TailwindTextSize = 'text-2xl';
  @Input() selectBy: 'Line' | 'Element' = 'Element';
  @Output() click = new EventEmitter<string>();
  codeExample = ` <main> 
     <section> 
       <h2>  Introduction  </h2> 
       <p>  This is a simple example 
             of a DOM tree  </p> 
     </section> 
     <article> 
       <h3>  Article Title  </h3> 
       <p> Some interesting content </p> 
     </article> 
 </main> `;

  codeLines = signal<CodeLine[]>(this.parseCode(this.codeExample));

  parseCode(code: string): CodeLine[] {
    const parsedCode = [];
    const lines = code.split('\n');
    for (const line of lines) {
      const elementInLine = spliteInTags(line);
      const codeLineElements: CodeLineElement[] = elementInLine.map((text) => {
        return {
          text,
          reservedWord: isTag(text),
          id: HtmlIdGeneratorService.generateId(text),
          selected: false,
        };
      });
      const newElement: CodeLine = {
        elements: codeLineElements,
        selected: false,
        id: codeLineElements.map((x) => x.id).join('$'),
      };
      parsedCode.push(newElement);
    }
    return parsedCode;
  }

  onLineClick(clickedItem: CodeLine) {
    const updatedCodeLines = this.codeLines().map((item) =>
      item.id === clickedItem.id
        ? { ...item, active: !clickedItem.selected }
        : item
    );

    this.codeLines.set(updatedCodeLines);

    this.click.emit(clickedItem.id);
  }

  isSpaceElement(id: string) {
    return /^space-\d+$/.test(id);
  }

  onElementClick(codeLine: CodeLine, clickedItem: CodeLineElement) {
    if (this.isSpaceElement(clickedItem.id)) {
      return;
    }
    const updatedCodeLines = this.codeLines().map((item) => {
      if (item.id !== codeLine.id) {
        return item;
      }
      if (item.elements) {
        const elementsInLine = item.elements.map((lineElement) =>
          lineElement.id === clickedItem.id
            ? { ...clickedItem, selected: !clickedItem.selected }
            : lineElement
        );

        return { ...item, elements: elementsInLine };
      }
      return item;
    });

    this.codeLines.set(updatedCodeLines);
  }
}
