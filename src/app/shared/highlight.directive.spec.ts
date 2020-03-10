import { HighlightDirective } from './highlight.directive';
import {ElementRef} from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // @ts-ignore
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });
});
