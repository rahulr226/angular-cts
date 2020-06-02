import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }
  removeItem(product) {
    this.cartService.removeItem(product);
    window.alert('Your product has been removed from  cart!');}
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}