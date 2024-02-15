import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-minimalist-search-bar',
  templateUrl: './search-bar.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SearchBarComponent,
    },
  ],
})
export class SearchBarComponent implements ControlValueAccessor {
  value!: string;
  disabled = false;
  touched = false;
  onChangeFn = (value: string) => {};
  onTouchedFn = () => {};
  @ViewChild('fakeInput', { static: true }) fakeInput!: ElementRef<HTMLElement>;

  onChange(e: any) {
    const inputText = e.target.textContent;
    this.onChangeFn(inputText);
    this.writeValue(inputText);
    this.markAsTouched();
  }

  onKeyDown(e: any) {
    if (e.key === 'Enter' || e.code === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  }

  setCaretEnd() {
    const el = this.fakeInput.nativeElement;
    const range = document.createRange();
    const sel = window.getSelection();

    if (el.childNodes.length === 0) {
      this.fakeInput.nativeElement.focus();
      return;
    }

    range.setStart(el, 1);
    range.collapse(true);

    if (sel) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

  writeValue(value: string): void {
    this.fakeInput.nativeElement.textContent = value;
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouchedFn();
      this.touched = true;
    }
  }
}
