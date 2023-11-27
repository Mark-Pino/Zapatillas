import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PedidsService} from "../../../../../../providers/services/setup/pedids.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pedid} from "../../models/pedid";

@Component({
  selector: 'app-pedid-edit',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Editar pedido</a>
        </li>
      </ul>
      <form [formGroup]="pedidForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>cliente_id. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="cliente_id"
                   id="cliente_id"
                   placeholder="cliente del pedido">
          </div>
          <app-form-validate-errors [group]="pedidForm"
                                    [controlName]="'cliente_id'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>descripcion. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="descripcion"
                   id="descripcion"
                   placeholder="descripcion del pedido">
          </div>
          <app-form-validate-errors [group]="pedidForm"
                                    [controlName]="'descripcion'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>numero. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="numero"
                   id="numero"
                   placeholder="numero del pedido">
          </div>
          <app-form-validate-errors [group]="pedidForm"
                                    [controlName]="'numero'"></app-form-validate-errors>
        </div>


        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>serie. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="serie"
                   id="serie"
                   placeholder="serie del pedido">
          </div>
          <app-form-validate-errors [group]="pedidForm"
                                    [controlName]="'serie'"></app-form-validate-errors>
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
                [disabled]="pedidForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class PedidEditComponent implements OnInit {
  abcForms: any;
  public idPedid: number = 0;
  public pedid = new Pedid();
  pedidForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    cliente_id: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    serie: new FormControl('', [Validators.required]),

  });

  constructor(private pedidsService: PedidsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;
    this.route.params.subscribe(res => {
      this.idPedid = parseInt(res['idPedid']);
      this.pedidForm.value.id = this.idPedid;
      this.getClientById(this.idPedid);
    });
    console.log("app-pedid-new");
  }

  getClientById(idPedid: number): void {
    this.pedidsService.getById$(idPedid).subscribe(response => {
      this.pedid = response;
      // @ts-ignore
      this.pedidForm.patchValue(this.pedid);
    });
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    if (this.pedidForm.valid) {
      this.pedidsService.add$(this.pedidForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }
  }
}
