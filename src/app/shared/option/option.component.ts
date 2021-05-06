import { Component, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css'],
})
export class OptionComponent implements OnInit {
  @Input() options: RadioOption[];
  value: any;

  constructor() {}

  ngOnInit(): void {}

  setValue(value: any) {
    this.value = value;
  }
}
