import {Component, OnInit} from '@angular/core';
import {Category} from '../../category/category';
import {CategoryService} from '../../category/category.service';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../product';

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
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value => {
      console.log(value);
      this.productForm.patchValue(value);
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      category: new FormControl('', Validators.required)
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
