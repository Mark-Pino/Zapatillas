import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../../../../../providers/services/setup/clients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../models/client";

@Component({
  selector: 'app-client-edit',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Editar Cliente</a>
        </li>
      </ul>
      <form [formGroup]="clientForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Nombre. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="nombre"
                   id="nombre"
                   placeholder="Nombre del cliente">
          </div>
          <app-form-validate-errors [group]="clientForm"
                                    [controlName]="'nombre'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>DNI. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="dni"
                   id="dni"
                   placeholder="DNI del cliente">
          </div>
          <app-form-validate-errors [group]="clientForm"
                                    [controlName]="'dni'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Dirección. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="direccion"
                   id="direccion"
                   placeholder="Dirección del cliente">
          </div>
          <app-form-validate-errors [group]="clientForm"
                                    [controlName]="'direccion'"></app-form-validate-errors>
        </div>


        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Telefono. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="number" class="form-control form-control-sm" formControlName="telefono"
                   id="telefono"
                   placeholder="Teléfono del cliente">
          </div>
          <app-form-validate-errors [group]="clientForm"
                                    [controlName]="'telefono'"></app-form-validate-errors>
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
                [disabled]="clientForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class ClientEditComponent implements OnInit {
  abcForms: any;
  public idClient: number = 0;
  public client = new Client();
  clientForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl(null),

  });

  constructor(private clientsService: ClientsService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;
    this.route.params.subscribe(res => {
      this.idClient = parseInt(res['idClient']);
      this.clientForm.value.id = this.idClient;
      this.getClientById(this.idClient);
    });
    console.log("app-client-new");
  }

  getClientById(idClient: number): void {
    this.clientsService.getById$(idClient).subscribe(response => {
      this.client = response;
      // @ts-ignore
      this.clientForm.patchValue(this.client);
    });
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    if (this.clientForm.valid) {
      this.clientsService.add$(this.clientForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }
  }
}
