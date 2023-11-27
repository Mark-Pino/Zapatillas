import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PagsService} from "../../../../../../providers/services/setup/pags.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pag} from "../../models/pag";

@Component({
  selector: 'app-pag-edit',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Editar Pago</a>
        </li>
      </ul>
      <form [formGroup]="pagForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>descripcion. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="descripcion"
                   id="descripcion"
                   placeholder="descripcion del cliente">
          </div>
          <app-form-validate-errors [group]="pagForm"
                                    [controlName]="'descripcion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>monto. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="monto"
                   id="monto"
                   placeholder="monto del cliente">
          </div>
          <app-form-validate-errors [group]="pagForm"
                                    [controlName]="'monto'"></app-form-validate-errors>
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
                [disabled]="pagForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class PagEditComponent implements OnInit {
  abcForms: any;
  public idPag: number = 0;
  public pag = new Pag();
  pagForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required]),

  });

  constructor(private pagsService: PagsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;
    this.route.params.subscribe(res => {
      this.idPag = parseInt(res['idPag']);
      this.pagForm.value.id = this.idPag;
      this.getPagById(this.idPag);
    });
    console.log("app-pag-new");
  }

  getPagById(idPag: number): void {
    this.pagsService.getById$(idPag).subscribe(response => {
      this.pag = response;
      // @ts-ignore
      this.pagForm.patchValue(this.pag);
    });
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    if (this.pagForm.valid) {
      this.pagsService.add$(this.pagForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }
  }
}
