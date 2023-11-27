import {Component, OnInit} from "@angular/core";
import {abcForms} from 'src/environments/generals';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarisService} from "../../../../../../providers/services/setup/usuaris.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuari} from "../../models/usuari";

@Component({
  selector: 'app-usuari-edit',
  template: `
    <button type="button" class="close btn-gm-return mb-2" aria-label="Close" (click)="cancelForm()">
      <span class="{{ abcForms.btnReturn.icon }}"></span> Regresar
    </button>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active"><i class="{{ abcForms.btnNew.icon }}"></i> Nuevo Usuario</a>
        </li>
      </ul>
      <form [formGroup]="usuariForm" class="row mt-2 d-flex justify-content-start align-items-center ">
        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>Nombre. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="userName"
                   id="userName"
                   placeholder="Nombre">
          </div>
          <app-form-validate-errors [group]="usuariForm"
                                    [controlName]="'userName'"></app-form-validate-errors>
        </div>

        <div class="form-group col-md-2 required">
          <div class="input-group input-group-sm">
            <label class="col-form-label"><b>DNI. </b></label>
          </div>
          <div class="input-group input-group-sm input-group-rounded">
            <input type="text" class="form-control form-control-sm" formControlName="password"
                   id="password"
                   placeholder="password">
          </div>
          <app-form-validate-errors [group]="usuariForm"
                                    [controlName]="'password'"></app-form-validate-errors>
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
                [disabled]="usuariForm.invalid">
          <span class="{{ abcForms.btnSave.icon }} lamb-icon"></span> {{ abcForms.btnSave.label }}
        </button>
      </div>
    </div>
  `
})
export class UsuariEditComponent implements OnInit {
  abcForms: any;
  public idUsuari: number = 0;
  public usuari = new Usuari();
  usuariForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });

  constructor(private usuarisService: UsuarisService,
              private router: Router,
              private route: ActivatedRoute) {


  }


  ngOnInit() {
    this.abcForms = abcForms;
    this.route.params.subscribe(res => {
      this.idUsuari = parseInt(res['idUsuari']);
      this.usuariForm.value.id = this.idUsuari;
      this.getUsuariById(this.idUsuari);
    });
    console.log("app-usuari-new");
  }

  getUsuariById(idUsuari: number): void {
    this.usuarisService.getById$(idUsuari).subscribe(response => {
      this.usuari = response;
      // @ts-ignore
      this.clientForm.patchValue(this.client);
    });
  }

  cancelForm() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  saveForm() {
    if (this.usuariForm.valid) {
      this.usuarisService.add$(this.usuariForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      });
    }
  }
}
