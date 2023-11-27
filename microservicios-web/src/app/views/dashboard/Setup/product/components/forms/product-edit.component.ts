import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../../providers/services/setup/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-edit',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> EditarProducto</a>
        </li>
      </ul>
      <form [formGroup]="productForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Nombre. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="nombre"
                   id="nombre"
                   placeholder="Nombre del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'nombre'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>costo. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="costo"
                   id="costo"
                   placeholder="costo del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'costo'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>categoriaId. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="categoriaId"
                   id="categoriaId"
                   placeholder="Dirección del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'categoriaId'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>tasaIGV. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="tasaIGV"
                   id="tasaIGV"
                   placeholder="Dirección del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'tasaIGV'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>descripcion. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="descripcion"
                   id="descripcion"
                   placeholder="Dirección del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'descripcion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>codigoBarras. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="codigoBarras"
                   id="codigoBarras"
                   placeholder="Dirección del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'codigoBarras'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>cantidadStock. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="cantidadStock"
                   id="cantidadStock"
                   placeholder="cantidadStock del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'cantidadStock'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>disponible. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="disponible"
                   id="disponible"
                   placeholder="disponiblen del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'disponible'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>proveedor. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="proveedor"
                   id="proveedor"
                   placeholder="proveedor del Producto">
          </div>
          <app-form-validate-errors [group]="productForm"
                                    [controlName]="'proveedor'"></app-form-validate-errors>
        </div>


      </form>
      <hr>
    </div>
    <div>
      <div class="mt-4 d-flex justify-content-end">
        <button type="button" class="btn {{ abcForms.btnCancel.class }} btn-sm" (click)="cancelForm()">
          <span class="{{ abcForms.btnCancel.icon }} lamb-icon"></span> {{ abcForms.btnCancel.label }}
        </button>
        <button type="button" class="btn {{ abcForms.btnSave.class }} btn-sm" (click)="saveForm()"
                [disabled]="productForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class ProductEditComponent implements OnInit {
  abcForms: any;
  public idProduct: number = 0;
  public product = new Product();
  productForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    costo: new FormControl('', [Validators.required]),
    categoriaId: new FormControl('', [Validators.required]),
    tasaIGV: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    codigoBarras: new FormControl('', [Validators.required]),
    cantidadStock: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),
    proveedor: new FormControl('', [Validators.required]),

  });

  constructor(private productsService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;
    this.route.params.subscribe(res => {
      this.idProduct = parseInt(res['idProduct']);
      this.productForm.value.id = this.idProduct;
      this.getClientById(this.idProduct);
    });
    console.log("app-client-new");
  }

  getClientById(idProduct: number): void {
    this.productsService.getById$(idProduct).subscribe(response => {
      this.product = response;
      // @ts-ignore
      this.productForm.patchValue(this.product);
    });
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    if (this.productForm.valid) {
      this.productsService.add$(this.productForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }
  }
}
