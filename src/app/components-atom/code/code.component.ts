import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  EventEmitter,
  input,
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
import { TailwindTextSize } from '../../interfaces/tailwind-css.interface';
import { CodeClick } from './code.interface';

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
  htmlCode = input<string>('');
  //@deprecated use codeClick rather
  @Output() click = new EventEmitter<string>();
  @Output() codeClick = new EventEmitter<CodeClick>();
  @Output() onHtmlParsed = new EventEmitter<CodeLine[]>();

  codeLines = signal<CodeLine[]>([]);

  constructor() {
    effect(
      () => {
        this.codeLines.set(this.parseCode(this.htmlCode()));
      },
      { allowSignalWrites: true }
    );
  }

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
    this.onHtmlParsed.emit(parsedCode);
    return parsedCode;
  }

  onLineClick(clickedItem: CodeLine) {
    const isSelect = !clickedItem.selected;
    const updatedCodeLines = this.codeLines().map((item) =>
      item.id === clickedItem.id ? { ...item, selected: isSelect } : item
    );

    this.codeLines.set(updatedCodeLines);

    //TODO: When remove deprecated element, remove || ""
    const codeClick$: CodeClick = {
      target: 'Line',
      action: isSelect ? 'Select' : 'Deselect',
      id: clickedItem.id || '',
    };
    this.codeClick.emit(codeClick$);
  }

  onElementClick(codeLine: CodeLine, clickedItem: CodeLineElement) {
    const isSelect = !clickedItem.selected;
    if (HtmlIdGeneratorService.isSpaceElement(clickedItem.id)) {
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

    //TODO: When remove deprecated element, remove || ""
    const codeClick$: CodeClick = {
      target: 'Element',
      action: isSelect ? 'Select' : 'Deselect',
      id: clickedItem.id || '',
    };
    this.codeClick.emit(codeClick$);
  }
}
