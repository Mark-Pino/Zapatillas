import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductsService} from "../../../../../providers/services/setup/products.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-attendance-container',
  template: `
    <app-product-list [products]="products"
                     (eventNew)="eventNew($event)"
                     (eventEdit)="eventEdit($event)"
                     (eventDelete)="eventDelete($event)"

    ></app-product-list>
  `
})

export class ProductContainersComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsService: ProductsService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getProducts();
  }

  public getProducts(): void {
    this.productsService.getAll$().subscribe(response => {
      this.products = response;
    });
  }

  public eventNew($event: boolean): void {
    console.log($event);
    if ($event) {
      this.router.navigate(['new'], {relativeTo: this.route});
    }

  }

  public eventEdit(idProduct: number) {
    this.router.navigate(['edit', {idProduct: idProduct}], {relativeTo: this.route});
  }

  public eventDelete(idProduct: number): void {

    this.productsService.delete$(idProduct).subscribe(response => {
      if (response) {
        this.getProducts()
      }
    });
  }
}
