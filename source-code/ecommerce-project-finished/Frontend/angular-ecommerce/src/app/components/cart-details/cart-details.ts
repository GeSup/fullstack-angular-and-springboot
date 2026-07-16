import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  standalone: false,
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.css',
})
export class CartDetails implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails(): void {
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe((data) => (this.totalQuantity = data));

    // compute cart total price and total quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem): void {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem): void {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem): void {
    this.cartService.remove(theCartItem);
  }
}
