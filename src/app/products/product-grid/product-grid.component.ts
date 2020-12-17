import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  @Input() product;
  @Output() changeItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  clickedItem() {
    this.changeItem.emit(this.product);
  }
}
