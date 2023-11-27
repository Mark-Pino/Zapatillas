import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Product} from "../../models/product";


@Component({
  selector: 'app-product-list',
  template: `
      <div class="float-end">
          <button type="button" (click)="goNew()" class="btn-gm-danger">
              <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Producto
          </button>
      </div>
      <div class="responsive-table">
          <table class="table table-lg table-hover table-striped table-sm">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">costo</th>
                  <th scope="col">categoriaId</th>
                  <th scope="col">tasaIGV</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">codigoBarras</th>
                  <th scope="col">cantidadStock</th>
                  <th scope="col">disponible</th>
                  <th scope="col">proveedor</th>
                  <th scope="col">Acciones</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of products ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                  <td data-title="Nombre">{{v.nombre}}</td>
                  <td data-title="costo">{{v.costo}}</td>
                  <td data-title="categoriaId">{{v.categoriaId}}</td>
                  <td data-title="tasaIGV">{{v.tasaIGV}}</td>
                  <td data-title="descripcion">{{v.descripcion}}</td>
                  <td data-title="codigoBarras">{{v.codigoBarras}}</td>
                  <td data-title="cantidadStock">{{v.cantidadStock}}</td>
                  <td data-title="disponible">{{v.disponible}}</td>
                  <td data-title="proveedor">{{v.proveedor}}</td>

                  <td data-title="Acciones">
                      <button type="button" class="btn-gm-sm btn btn-warning btn-gm-small"
                              title="{{ abcForms.btnEdit.label }}" (click)="goEdit(v.id!)">
                          <span class="{{ abcForms.btnEdit.icon }}"></span>
                      </button>
                      <button type="button" class="btn-gm-sm btn btn-danger text-white btn-gm-small"
                              title="{{ abcForms.btnDelete.label }}" (click)="goDelete(v.id!)">
                          <span class="{{ abcForms.btnDelete.icon }}"></span>
                      </button>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
  `,
})

export class ProductListComponent implements OnInit {
  abcForms: any;
  @Input() products: Product[] = [];
  @Output() eventNew = new EventEmitter<boolean>();
  @Output() eventEdit = new EventEmitter<number>();
  @Output() eventDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.abcForms = abcForms;
  }

  public goNew(): void {
    this.eventNew.emit(true);
  }

  public goEdit(id: number): void {
    this.eventEdit.emit(id);
  }

  public goDelete(id: number): void {
    this.eventDelete.emit(id);
  }
}
