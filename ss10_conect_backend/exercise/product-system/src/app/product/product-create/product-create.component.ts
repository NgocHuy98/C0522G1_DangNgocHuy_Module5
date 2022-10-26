import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../category/category.service';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../category/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  ngOnInit(): void {
    this.getAllCategory();
  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.saveInfo(product).subscribe(value => {

      this.productForm.reset();
      this.router.navigateByUrl('list');
    }, error => {
      console.log(error);
    }, () => {
      alert('Thêm mới thành công!');
    });

  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }


}
