import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {abcForms} from 'src/environments/generals';
import {Categori} from "../../models/categori";


@Component({
  selector: 'app-categori-list',
  template: `
      <div class="float-end">
          <button type="button" (click)="goNew()" class="btn-gm-danger">
              <span class="{{ abcForms.btnNew.icon }} lamb-icon"></span> {{ abcForms.btnNew.label }} Categoria
          </button>
      </div>
      <div class="responsive-table">
          <table class="table table-lg table-hover table-striped table-sm">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">titulo</th>
                  <th scope="col">descripccion</th>
                  <th scope="col">etiqueta</th>
                  <th scope="col">color</th>
                  <th scope="col">Acciones</th>
              </tr>
              </thead>
              <tbody class="table-group-divider">
              <tr *ngFor="let v of categoris ; let i=index">
                  <th scope="row">{{i + 1}}</th>
                  <td data-title="titulo">{{v.titulo}}</td>
                  <td data-title="descripccion">{{v.descripccion}}</td>
                  <td data-title="etiqueta">{{v.etiqueta}}</td>
                  <td data-title="color">{{v.color}}</td>

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

export class CategoriListComponent implements OnInit {
  abcForms: any;
  @Input() categoris: Categori[] = [];
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
