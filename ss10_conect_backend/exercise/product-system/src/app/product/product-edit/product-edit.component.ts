import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  categories: Category[];
  productForm: FormGroup;
  id: number;
  product: Product;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  // productForm: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   description: new FormControl(),
  //   category: new FormControl()
  // });

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.productId);
    this.productService.findById(id).subscribe(value => {
      this.productForm.patchValue(value);
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(product.id, product).subscribe(value => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('list');
    });
  }

}
