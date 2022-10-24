import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(value => {
      this.productList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Complete');
    });

  }

  //
  // getAll() {
  //   this.productService.getAll().subscribe(products => {
  //     this.products = products;
  //   });
  // }

}
