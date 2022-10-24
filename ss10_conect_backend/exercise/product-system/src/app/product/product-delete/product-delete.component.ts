import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.productId);
    this.productService.findById(id).subscribe(value => {
      this.productForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        description: new FormControl(),
        category: new FormControl()
      });
      this.productForm.patchValue(value);
    }, error => {
      console.log('Error');
    });
  }

  deleteProduct() {
    const product = this.productForm.value;
    this.productService.deleteProduct(product.id).subscribe(value => {
      alert('Xoá thành công');
      this.router.navigate(['list']);
    });
  }

}
