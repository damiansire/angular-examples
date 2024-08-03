import { Component, computed, Signal } from '@angular/core';
import { TitleComponent } from '../../../../components-atom/title/title.component';
import { WrapperAnimationComponent } from './wrapper-animation/wrapper-animation.component';
import { DrawPreviewComponent } from '../../../../components/draw-preview/draw-preview.component';
import { ContainerVariableBoxDrawComponent } from '../../../../components-draw/container-variable-box-draw/container-variable-box-draw.component';
import { TextDescriptionComponent } from '../../../../components-atom/text-description/text-description.component';
import { VariableBoxComponent } from '../../../../components-atom/variable-box/variable-box.component';
import { VariableBoxDrawComponent } from '../../../../components-draw/variable-box-draw/variable-box-draw.component';
import { CodeLine } from '../../../../components-atom/component-atom.interface';
import { CodeComponent } from '../../../../components-atom/code/code.component';
import { CodeLegazyComponent } from '../../../../components-atom/code-legazy/code-legazy.component';

@Component({
  selector: 'app-what-is-signals',
  standalone: true,
  imports: [
    TitleComponent,
    WrapperAnimationComponent,
    DrawPreviewComponent,
    ContainerVariableBoxDrawComponent,
    TextDescriptionComponent,
    VariableBoxComponent,
    VariableBoxDrawComponent,
    CodeComponent,
    CodeLegazyComponent,
  ],
  templateUrl: './what-is-signals.component.html',
  styleUrl: './what-is-signals.component.css',
})
export class WhatIsSignalsComponent {
  title = 'What are signals?';
  showExample: boolean = false;
  clickCount = 0;
  dataTypes = [
    { text: 'Number', isContainer: false },
    { text: 'String', isContainer: false },
    { text: 'Boolean', isContainer: false },
    { text: 'Object', isContainer: false },
    { text: 'Array', isContainer: false },
  ];
  convertToContainer($event: any) {
    const id = $event.name;
    const index = this.dataTypes.findIndex((type) => type.text === id);
    if (index !== -1) {
      this.dataTypes[index].isContainer = true;
      this.clickCount++;
    }
  }

  signalWrapperLines: Signal<CodeLine[]> = computed<CodeLine[]>(() => [
    {
      line: 'export class SignalWrapper<T> {',
      active: false,
      id: 'signal-wrapper-class',
    },
    {
      line: '  private _signal: Signal<T>;',
      active: false,
      id: 'private-signal',
    },
    {
      line: '  constructor(initialValue: T) {',
      active: false,
      id: 'constructor',
    },
    {
      line: '    this._signal = signal(initialValue);',
      active: false,
      id: 'signal-initialization',
    },
    { line: '  }', active: false, id: 'constructor-end' }, // Closing curly brace for constructor
    { line: '}', active: false, id: 'signal-wrapper-class-end' }, // Closing curly brace for class
  ]);
}
