import { Component, OnInit, DoCheck, EventEmitter, Input, Output, KeyValueDiffers, ChangeDetectorRef, HostBinding, HostListener } from '@angular/core';
import { Cart } from './../../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit, DoCheck {
  @Input() item: Cart;
  @Output() onRemove: EventEmitter<Cart> = new EventEmitter<Cart>();
  @Input() sum: number;

  differ: any;
    constructor(
      private differs: KeyValueDiffers,
      private changeDetector: ChangeDetectorRef) {
    }

  ngOnInit() {
    this.differ = this.differs.find(this.item).create(this.changeDetector);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.item);

    if (changes) {
      console.log(changes);
      changes.forEachChangedItem(item => this.validateValue('changed', item));
    }
  }

  @HostBinding('class') class = 'red';

  @HostListener('mouseenter', ['$event']) c_onEnter() {
    this.class = 'red'
  }
  @HostListener('mouseleave', ['$event']) mouseleave() {
    this.class = 'blue'
  }

  setGreen() { this.class = 'green';}

  remove(): void {
      this.onRemove.emit(this.item);
  }

  private validateValue(action: string, item): void {
    if (action === 'changed') {
      if (item.currentValue <= 0 ){
        alert("value must be > 0");
      }
        
      console.log(item.key, action, 'from', item.previousValue, 'to', item.currentValue);
    }
  }
}
