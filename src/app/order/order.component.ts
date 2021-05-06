import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/option/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Débito', value: 'DEB' },
    { label: 'Cartão refeição', value: 'REF' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
