import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private _products = signal<Product[]>([]);

  get products(): Product[] {
    return this._products();
  }

  set products(data: Product[]) {
    this._products.set(data);
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  private listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    );
  }
}
