import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategorisService} from "../../../../../../providers/services/setup/categoris.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categori-new',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Categoria</a>
        </li>
      </ul>
      <form [formGroup]="categoriForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>titulo. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="titulo"
                   id="titulo"
                   placeholder="titulo del Categoria">
          </div>
          <app-form-validate-errors [group]="categoriForm"
                                    [controlName]="'titulo'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>descripccion. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="descripccion"
                   id="descripccion"
                   placeholder="descripccion del Categoria">
          </div>
          <app-form-validate-errors [group]="categoriForm"
                                    [controlName]="'descripccion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>etiqueta. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="etiqueta"
                   id="etiqueta"
                   placeholder="etiqueta del Categoria">
          </div>
          <app-form-validate-errors [group]="categoriForm"
                                    [controlName]="'etiqueta'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>color. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="color"
                   id="color"
                   placeholder="color del Categoria">
          </div>
          <app-form-validate-errors [group]="categoriForm"
                                    [controlName]="'color'"></app-form-validate-errors>
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
                [disabled]="categoriForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class CategoriNewComponent implements OnInit {
  abcForms: any;
  categoriForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripccion: new FormControl('', [Validators.required]),
    etiqueta: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),

  });

  constructor(private categorisService: CategorisService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;

    console.log("app-categori-new");
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    console.log(this.categoriForm.value);
    if (this.categoriForm.valid) {
      this.categorisService.add$(this.categoriForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }


  }
}
