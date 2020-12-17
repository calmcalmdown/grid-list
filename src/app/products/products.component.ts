import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products = [];
  @Output() changeItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  clickedItem($event) {
    this.changeItem.emit($event);
  }
}
