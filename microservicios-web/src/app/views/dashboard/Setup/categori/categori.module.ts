import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {CategoriRoutingModule, rutedComponents} from './categori-routing.module';

import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {CategoriListComponent} from "./components/list/categori-list.component";
import {CategorisService} from "../../../../providers/services/setup/categoris.service";
import {CategoriNewComponent} from "./components/forms/categori-new.component";
import {CategoriEditComponent} from "./components/forms/categori-edit.component";

const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [CategoriListComponent, CategoriNewComponent, CategoriEditComponent];

const SERVICES: any[] = [CategorisService];

const NG_MODULES: any = [];

const NGB_MODULES: any = [
  NgbModalModule,
  // NgbPopoverModule,
];
const PIPES: any = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    ...SHARED_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    ...rutedComponents,
    ...PIPES,

  ],
  providers: [
    ...SERVICES,
  ],
  exports: []
})
export class CategoriModule {
}
