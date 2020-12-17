import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() product;
  @Output() changeItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  clickedItem() {
    this.changeItem.emit(this.product);
  }
}
