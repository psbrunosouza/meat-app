import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OptionComponent ),
      multi: true
    }
  ]
})
export class OptionComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadioOption[];
  value: any;
  onChange: any;

  constructor() {}

  ngOnInit(): void {}

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
