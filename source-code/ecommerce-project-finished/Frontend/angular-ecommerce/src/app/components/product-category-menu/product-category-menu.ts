import { Component, OnInit, signal } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  standalone: false,
  templateUrl: './product-category-menu.html',
  styleUrl: './product-category-menu.css',
})
export class ProductCategoryMenu implements OnInit {
  private _productCategories = signal<ProductCategory[]>([]);

  get productCategories(): ProductCategory[] {
    return this._productCategories();
  }

  set productCategories(data: ProductCategory[]) {
    this._productCategories.set(data);
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data, null, 2));
        this.productCategories = data;
      }
    );
  }

}
